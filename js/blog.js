
let blogButton = document.querySelector("#blogButton");
let containerHTMLNewestPosts = document.querySelector("#postsBody");
let currentPage = 1;
let postsTotal = 0;
let postProcessed = 0;
let categoryId = 0;

function olderPosts() {
    currentPage = currentPage + 1;
    run();
}

async function getNewestPosts(pageNumber) {
    const response = await fetch(newestPosts(pageNumber));
    postsTotal = parseInt(response.headers.get("X-WP-Total"));
    const responseBody = await response.json();
    return responseBody;
}

async function getNewestPostsByCategory(pageNumber, categoryId) {
    const response = await fetch(newestPostsByCategory(pageNumber, categoryId));
    categoryId = 0;
    postsTotal = parseInt(response.headers.get("X-WP-Total"));
    const responseBody = await response.json();
    return responseBody;
}

async function getTags(url) {
    const response = await fetch(url);
    const responseBody = await response.json();
    return responseBody;
}

function tagsToHtml(postArr) {
    let tagHtml = "";
    for (let i = 0; i < postArr.length; i++) {
        tagHtml += `<span> ${postArr[i].name} </span>`
        if (i != postArr.length - 1) {
            tagHtml += "|";
        }
    }
    return tagHtml;
}


async function runTags(url) {
    const getTagsResult = await getTags(url);
    return tagsToHtml(getTagsResult);
}



async function containerNewestPosts(postsArr) {
    for (let i = 0; i < postsArr.length; i++) {
        postProcessed = postProcessed + 1;
        containerHTMLNewestPosts.innerHTML += `
        <div class="blog_post_container">
            <div class="panel_body_blog_title font2">${postsArr[i].title.rendered}</div>
            <div class="panel_body_blog_photo">
        ${getImage(postsArr[i].content.rendered)}
            </div>
            <div class="panel_body_blog_tags">
            ${await runTags(getTagsForPost(postsArr[i].id))} 
            </div>
            <div class="panel_body_blog_intro">${postsArr[i].excerpt.rendered}</div>
            <div class="panel_body_blog_button">
                <button type="button" value="data" class="panel_body_blog_button_styling" id="#" aria-label="Go to post"><a
                        href="details.html?post=${postsArr[i].id}" aria-label="Go to post">Read</a></button>
            </div>
            <div class="panel_body_blog_lines double_lines">
                <hr class="hr_1">
                <hr class="hr_2">
            </div>
        </div>`;
    }
}

function getImage(htmlString) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, "text/html");
    const imgTag = doc.querySelector("img");
    imgTag.classList.add("pic_blog_mini_styling");
    const imgTagContent = imgTag.outerHTML;
    return imgTagContent;
}

function filterByCategory(catId) {
    categoryId = catId;
    currentPage = 1;
    postProcessed = 0;
    postsTotal = 0;
    containerHTMLNewestPosts.innerHTML = "";
    run();
}

async function run() {
    if (postProcessed === 0 || postProcessed < postsTotal) {
        let resultNewPosts = null;
        if (categoryId === 0) {
            resultNewPosts = await getNewestPosts(currentPage);
        } else {
            resultNewPosts = await getNewestPostsByCategory(currentPage, categoryId);
        }
        containerNewestPosts(resultNewPosts);
    } else {
        // alert("no more posts");
        const disableButton = document.getElementById("olderPosts");
        disableButton.disabled = true;
        disableButton.innerHTML = "";
        disableButton.innerHTML = "There are no more posts to show";
    }
}


run();


1. trenger å hente 5 første posts på blogg(det funker på samme måte som å hente detaljer)
2. trenger funksjon som skal hente flere posts når jeg skal trykke på kanppen Older posts
3. trenger funksjon som skal sende med til detaljert side når jeg skal trykke på knappen Read


let blogButton = document.querySelector("#blogButton");
let containerHTMLNewestPosts = document.querySelector("#postsBody");


blogButton.addEventListener("click", someFFFFFFFunction);

async function getNewestPosts() {
    const response = await fetch(newestPosts);
    const responseBody = await response.json();
    console.log(responseBody);
    return responseBody;
}

${ postArr[i].title.}

function containerNewestPosts(postsArr) {
    containerHTMLNewestPosts.innerHTML = "";
    for (let i = 0; i < postsArr.length; i++) {
        containerHTMLNewestPosts.innerHTML += `
    <div class="blog_post_container">
    <div class="panel_body_blog_title font2">${postArr[i].title.rendered}</div>
    <div class="panel_body_blog_photo">
        <img src="../img/drive-download-20230511T143903Z-001/IMG_1177.JPG"
            class="pic_blog_mini_styling">
    </div>
    <div class="panel_body_blog_tags">
        <span>My mum is so cool! |</span>
        <span>Beginnings & Endings |</span>
        <span>Green | </span>
        <span>Yellow | </span>
        <span>Brown </span>
    </div>
    <div class="panel_body_blog_intro">Do you remember summer 2021? Was it this summer
        that nobody was supposed to travel, but everyone did anyway? Yes, the very same
        one.</div>
    <div class="panel_body_blog_button">
        <button type="button" value="data" class="panel_body_blog_button_styling" id="#"><a
                href="post.html">Read</a></button>
    </div>
    <div class="panel_body_blog_lines double_lines">
        <hr class="hr_1">
        <hr class="hr_2">
    </div>
</div>
    
    `
    }
}
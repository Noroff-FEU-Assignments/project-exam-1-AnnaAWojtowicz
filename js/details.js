const params = new URLSearchParams(document.location.search);
let idParam = params.get("post");
const postId = idParam;


async function getSPecificPost(postId) {
    const response = await fetch(getPostDetails(postId));
    const responseBody = await response.json();
    return responseBody;
}



function container(responseBody) {
    const containerHTMLSpecific = document.getElementById("specificPost");
    containerHTMLSpecific.innerHTML = `
    <section class="title">
        <h1 class="underline_styling">${responseBody.title.rendered}
        </h1>
        <div class="double_lines">
            <hr class="hr_1">
            <hr class="hr_2">
        </div>
    </section>
 <div class="blog_post">
    <div class="date_post font2">Published: ${convertDate(responseBody.modified)}
    </div>

    <div class="panel_body_blog_tags_post">
        <span>USA, Canada and Iceland | </span>
        <span>Gray | </span>
        <span>Black | </span>
        <span>Red | </span>
        <span>White </span>
    </div>
    
    <div class="photo_and_text_post">${responseBody.content.rendered}
   

        <div class="panel_body_blog_lines_post double_lines">
            <hr class="hr_1">
            <hr class="hr_2">
        </div>
    </div>
</div>

<div class="button_post"><button type="button" value="data" class="button_styling" id="#" aria-label="Go back to posts"><a
                                    href="../html/blog.html" aria-label="Go back to posts">Go back to posts</a></button></div>


                        <div class="panel_comment" id="postData">
                            <h2>New comment</h2>
                            <form id="commentForm">
                                <div class="input_panels">
                                    <input type="text" id="name" name="name" placeholder="Name" class="input_styling" aria-label="enter your name here">
                                </div>
                                <div class="input_panels">
                                    <input type="email" id="email" name="email" placeholder="Email"
                                        class="input_styling" aria-label="enter your email here">
                                </div>
                                <div class="input_panels">
                                    <textarea type="textarea" id="message" name="message" placeholder="Message"
                                        class="input_styling" aria-label="enter your message here"></textarea>
                                </div>
                                <div class="input_panels">
                                    <input type="button" value="Send" onclick="postNewComment()"
                                        class="button button_styling" aria-label="send">
                                </div>
                            </form>
                            <h2>Comments</h2>
                            <div id="comments"></div>
                        </div>`
}


async function showCommentsInHtml(data) {
    const comments = data._embedded.replies[0];
    const commentsHtml = document.getElementById("comments");
    commentsHtml.innerHTML = "";

    for (let i = 0; i < comments.length; i++) {
        commentsHtml.innerHTML += `
            <div id="comment_${i}">
                <span>
                    <img src="${comments[i].author_avatar_urls[48]}" alt="avatar Image">
                    ${comments[i].author_name}
                </span>
                <br>
                ${convertDate(comments[i].date)}
                ${comments[i].content.rendered}
                <br>
            </div>
        `;
    }
}

async function postNewComment() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const newComment = {
        author_name: name,
        author_email: email,
        content: message,
        post: postId
    }


    const credentials = window.btoa(username + ":" + password);

    const response = await fetch(comments, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic " + credentials
        },
        body: JSON.stringify(newComment)
    }).then(async function (response) {
        if (response.ok) {
            alert("Comment accepted");
            await run();
        } else {
            alert("Something went wrong");
        }
    }).catch(function (error) {
        console.log("Error: ", error);
    });
}

// document.addEventListener("DOMContentLoaded", async function () {
//     var details = await getSPecificPost(idParam);
//     console.log(details);
//     container(details);
//     showCommentsInHtml(details);
// }, false);

async function run() {
    var details = await getSPecificPost(idParam);
    console.log(details);
    container(details);
    showCommentsInHtml(details);
    document.title = details.title.rendered;
}

run();
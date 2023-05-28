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
    <!--<div class="panel_body_blog_photo_post">
            <img src="../img/carousel/IMG_1448.JPG"
                class="photo_post">
        </div>

        <div class="panel_body_blog_text_post">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse finibus
                malesuada justo, ac bibendum ante commodo eu. Donec tincidunt gravida est vel
                sagittis. Phasellus laoreet velit vel tempor ultricies. Mauris lacus velit,
                suscipit id mattis quis, hendrerit ac mauris. Nullam maximus tellus nec
                venenatis pulvinar. Phasellus ac tristique eros. Cras tristique, mauris in
                lacinia facilisis, justo turpis faucibus ligula, id tempor est nunc et arcu.
                Donec id lobortis sem. In velit mauris, cursus non massa a, sodales vehicula
                ante. Sed pulvinar efficitur neque rutrum pharetra. Integer id metus a magna
                facilisis pellentesque sit amet non massa. Sed urna massa, cursus sed mattis et,
                venenatis vitae dolor. Aenean ornare mauris vitae neque feugiat varius.
            </p>
        </div>
        <div class="panel_body_blog_photo_post">
            <img src="../img/carousel/IMG_1450.JPG"
                class="photo_post">
        </div>

        <div class="panel_body_blog_text_post">
            <p>Sed semper ligula sit amet ipsum lacinia euismod id sit amet enim. Nunc in
                laoreet tortor, non tincidunt est. Quisque vulputate tortor vel diam posuere
                venenatis. Ut posuere, ligula sed malesuada porta, enim risus iaculis ipsum, ut
                cursus leo ante sit amet elit. Ut vel fermentum magna. Donec faucibus lorem eget
                ullamcorper tristique. Nulla vehicula condimentum nisl et tempor. Maecenas
                tincidunt orci id ligula vulputate, eget gravida nisi vestibulum. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                Maecenas sodales volutpat viverra. Morbi dictum, lectus et pretium efficitur,
                leo ex hendrerit augue, tempor mattis ipsum nisi non sem. Vestibulum euismod
                luctus fringilla. Praesent volutpat massa nibh, ut mattis velit fermentum eu.
                Integer mattis ac quam dictum pellentesque.
            </p>
        </div>
        
        <div class="panel_body_blog_photo_post">
            <img src="../img/carousel/IMG_1451.JPG"
                class="photo_post">
        </div>

        <div class="panel_body_blog_text_post">
            <p>
                Curabitur sagittis lorem felis, nec tincidunt augue molestie non. Ut eu
                vestibulum sem. Cras tristique pharetra odio. Phasellus nec nulla sit amet nulla
                rutrum sodales. Sed eu purus eu massa laoreet pretium in eu nibh. Donec vitae
                felis sapien. Mauris dignissim bibendum tortor, eu consequat nisi malesuada eu.
                Suspendisse semper lacinia tellus, sit amet semper erat mattis nec.
            </p>
        </div>
        <div class="panel_body_blog_text_post">
            <p>
                In this project I used:
            </p>
            <li>Forest Moss - Distress Stain Spray </li>
            <li>Mustard Seed - Distress Stain Spray</li>
            <li>Vintage Photo - Distress Oxide Spray</li>
            <li>Vintage Photo - Distress Ink</li>
            <li>Pocket Frame - Sizzix (#662690)</li>
        </div>-->

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
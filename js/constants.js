const mainUrl = "https://wp.thelittlescrapbookfactory.com/wp-json";
const mainUrlShort = "https://wp.thelittlescrapbookfactory.com";
const posts = `${mainUrl}/wp/v2/posts`;
const newestPosts = `${posts}?per_page=5&orderby=date&order=desc&page=1`;

function getPosts() {
    return mainUrl;
}

function getPostDetails(postId) {
    let postDetail = `${posts}/${postId}`;
    return postDetail;
}
const mainUrl = "https://wp.thelittlescrapbookfactory.com/wp-json";
const mainUrlShort = "https://wp.thelittlescrapbookfactory.com";
const posts = `${mainUrl}/wp/v2/posts`;
const tags = `${mainUrl}/wp/v2/tags`;


function getTagsForPost(postId) {
    return `${tags}?post=${postId}`;
}

function newestPosts(pageNumber) {
    return `${posts}?per_page=5&orderby=date&order=desc&page=${pageNumber}`;
}

function getPosts() {
    return mainUrl;
}

function getPostDetails(postId) {
    let postDetail = `${posts}/${postId}`;
    return postDetail;
}
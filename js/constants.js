const mainUrl = "https://wp.thelittlescrapbookfactory.com/wp-json";
const mainUrlShort = "https://wp.thelittlescrapbookfactory.com";
const posts = `${mainUrl}/wp/v2/posts`;
const tags = `${mainUrl}/wp/v2/tags`;
const username = "AnnaWojtowicz";
const password = "dSipi9blYTFBp8yhDjDnLHXK";
const comments = `${mainUrl}/wp/v2/comments`;
const contactPageUrl = `${mainUrl}/wp-json/wp/v2/pages/208?_embed`;


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
    let postDetail = `${posts}/${postId}?_embed`;
    return postDetail;
}

function convertDate(rawDate) {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(rawDate);
    return date.toLocaleDateString("en-GB", dateOptions);
}

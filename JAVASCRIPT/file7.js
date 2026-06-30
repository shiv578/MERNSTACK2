const title = document.querySelector("#postTitle");
const id = document.querySelector("#postId");
const body = document.querySelector("#postBody");

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => {
        return res.json();
    })
    .then((post) => {
        console.log(post);

        title.innerText = post.title;
        id.innerText = "Post ID: " + post.id;
        body.innerText = post.body;
    })
    .catch((error) => {
        console.log("JSONPlaceholder is not responding", error);

        title.innerText = "Error!";
        id.innerText = "";
        body.innerText = "Failed to load data.";
    });
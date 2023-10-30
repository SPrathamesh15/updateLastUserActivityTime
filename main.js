const posts = [];
let lastActivityTime = null;

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}

function updateLastUserActivityTime() {
    return new Promise((resolve) => {
        setTimeout(() => {
            lastActivityTime = new Date();
            resolve(lastActivityTime);
        }, 1000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletedPost = posts.pop();
                resolve(deletedPost);
            } else {
                reject("ERROR: No posts to delete");
            }
        }, 1000);
    });
}

function logPostsAndActivity() {
    Promise.all([createPost({ title: 'New Post' }), updateLastUserActivityTime()])
        .then(([_, lastActivityTime]) => {
            console.log("All posts:", posts);
            console.log("Last Activity Time:", lastActivityTime);
        })
        .then(() => deletePost())
        .then(deletedPost => {
            console.log("Deleted Post:", deletedPost);
            console.log("Remaining Posts:", posts);
        })
        .catch(error => console.log(error));
}

// Call logPostsAndActivity when you want to create a post and update the activity time.
logPostsAndActivity();

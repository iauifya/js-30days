const postTemplate = document.querySelector('#single-post');
const postList = document.querySelector('.posts');
const form = document.querySelector('#new-posts form');
const fetchBtn = document.querySelector('#available-posts button');

// const axios = require('axios');

// Make a request for a user with a given ID
// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(function(response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function(error) {
//         // handle error
//         console.log(error);
//     });

//get
//此作法目前還不知道如何與dom結合 以解決
function fetchPost() {
    axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
        })
        .then(function(response) {
            const listOfPosts = response.data;
            for (const post of listOfPosts) {
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h3').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body;
                postEl.querySelector('li').id = post.id;
                postList.append(postEl);
            }
            console.log(response);
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });
}

// function wearCloth(){

// }
// async function fetchPost() {
//     try {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//         console.log(response);
//         const listOfPosts = response.data;
//         for (const post of listOfPosts) {
//             const postEl = document.importNode(postTemplate.content, true);
//             postEl.querySelector('h3').textContent = post.title.toUpperCase();
//             postEl.querySelector('p').textContent = post.body;
//             postEl.querySelector('li').id = post.id;
//             postList.append(postEl);
//         }
//     } catch (error) {
//         alert(error.message);
//     }
// }
fetchBtn.addEventListener('click', fetchPost);

//post 
function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            data: post,
        })
        .then(function(response) {
            const postEl = document.importNode(postTemplate.content, true);
            postEl.querySelector('h3').textContent = post.title.toUpperCase();
            postEl.querySelector('p').textContent = post.body;
            postEl.querySelector('li').id = post.id;
            postList.append(postEl);
            console.log(response);
        })
        .catch(function(error) {
            // handle error
            console.log(error);
        });
}
//用asycn/await、包在function裡面的作法
// async function createPost(title, content) {
//     const userId = Math.random();
//     const post = {
//         title: title,
//         body: content,
//         userId: userId
//     };

//     const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
//     console.log(response);
//     const postEl = document.importNode(postTemplate.content, true);
//     postEl.querySelector('h3').textContent = post.title.toUpperCase();
//     postEl.querySelector('p').textContent = post.body;
//     postEl.querySelector('li').id = post.id;
//     postList.append(postEl);

// }
form.addEventListener('submit', event => {
    event.preventDefault(); //停止dom的預設事件
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);

})

//delete
//寫在事件偵聽裡面
postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        let post = event.target.closest('li');
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        postList.removeChild(post);
        console.log(post);
    }
});
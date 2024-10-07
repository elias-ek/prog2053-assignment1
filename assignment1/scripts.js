
const postContainer = document.getElementById("post")
const loader = document.getElementById("loader")
var postNr = 1

async function fetchPost(postNr) {

   const xhr = new XMLHttpRequest(postNr);
   xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${postNr}`, true);

   xhr.onload = function(){
        if (xhr.status === 200){
            const post = JSON.parse(xhr.responseText);
            postContainer.innerHTML = `<h2>${post.body}</h2><p>${post.body}</p>`;
        } else {
            postContainer.innerHTML = '<p>Failed to load post</p>'
        }
    };

    xhr.onerror = function(){
        postContainer.innerHTML = '<p>Failed to load post</p>'
    };

    xhr.send();
}

function load(){
    fetchPost(postNr);
    postNr++;
}

function checkScroll(){
    const { top, scrollHeight, clientHeight} = document.documentElement;
    if(top + clientHeight >= scrollHeight -20){
        loader.style.display = 'block';
        setTimeout(() => {
            loader.style.display = 'none';
            load();
        }, 1000);
    }
}

load();

window.addEventListener('scroll', checkScroll);
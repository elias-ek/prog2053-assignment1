
const postContainer = document.getElementById("post")
var postNr = 1
var postAmount = 0

async function fetchPost(postNr) {

   const xhr = new XMLHttpRequest(postNr);
   xhr.open('GET', `https://jsonplaceholder.typicode.com/posts/${postNr}`, true);

   xhr.onload = function(){
        if (xhr.status === 200){

            var postDiv = document.createElement('div');
            postDiv.id = `post${postNr}`;
            postDiv.className = 'postDiv';

            const post = JSON.parse(xhr.responseText);
            postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
            postContainer.appendChild(postDiv);
            postAmount++
        } else {
            postDiv.innerHTML = '<p>Failed to load post</p>'
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

window.onscroll = function(){
    if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight){
        if(postAmount < 3){
            load();
        }
        else if(postAmount >= 3){

            var removePost = document.getElementById("post" + (postNr - 3))
            removePost.remove();
            load();
            postAmount =3
        }
    }
    console.log(postNr, postAmount);
    
}

load();
load();
load();


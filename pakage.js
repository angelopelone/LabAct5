let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");
let postBeingEdited; // Variable to store the post being edited

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("button clicked");
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    msg.innerHTML = "Post cannot be blank";
    console.log("failure");
  } else {
    console.log("successs");
    msg.innerHTML = "";
    acceptData();
  }
};

let data = {};

let acceptData = () => {
  data["text"] = input.value;
  console.log(data);
  createPost();
};

let createPost = () => {
    posts.innerHTML += `
    <div>
      <p>${data.text}</p>
      <span class="options">
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        <button onClick="editPost(this)" class="edit">Edit</button>
        <i onClick="editPost(this)" class="fas fa-edit"></i>
      </span>
    </div>
    `;
    input.value = "";
  };
  

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  alert("Data Deleted");
};

let deleteAllPosts = () => {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear the content of the posts container
    alert('All posts deleted');
  };
  

let editPost = (element) => {
    const postElement = element.closest('div');
    const postTextElement = postElement.querySelector('p');
  
    if (postTextElement) {
      const editedText = prompt("Edit your post:", postTextElement.textContent);
      if (editedText !== null) {
        postTextElement.textContent = editedText;
        alert("Post edited successfully!");
      }
    }
  };

console.log('Package.js is running');
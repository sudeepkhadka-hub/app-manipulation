// Function to check if there is text in the input field
function togglePostButton() {
  const inputField = document.getElementById('postInput');  // Corrected the ID here
  const postButton = document.getElementById('postButton');

  // If there's content in the input field, enable the post button, else disable it
  if (inputField.value.trim() !== '') {
    postButton.disabled = false;  // Enable the button
  } else {
    postButton.disabled = true;   // Disable the button
  }
}

// Function to handle the post content
function postContent() {
  console.log("Post button clicked!");  // Debugging statement to check if the function is triggered

  const inputField = document.getElementById('postInput');  // Corrected the ID here
  const postContent = inputField.value.trim();

  // Check if the post content is empty
  // if (postContent === '') {
  //   alert("Please write something before posting!");
  //   return;
  // }

  // Create a new div to represent the post
  const newPost = document.createElement('div');
  newPost.classList.add('post-item');// Add a class for styling the post
  const randomId = Math.random().toString(36).substr(2, 9);
  newPost.id= randomId;


  // Add content to the new post
  newPost.innerHTML = `
    <div class="post-header">
      <img src="https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=1024x1024&w=is&k=20&c=Yu8jBIVdSo149ZSApI0lVnrnDRY8A7C3JH-8J-U2yxc=" alt="profile" class="post-avatar">
      <span class="post-username">sudip</span>
    </div>
    <div class="post-body">
      <p>${!postContent?"content":postContent}</p>
      
    </div>
    <div class="post-body">
                   <button id="delete" onclick="deletePost('${randomId}')" >delete
</button>
    </div>
    <div class="post-footer">
      <span class="post-time">${new Date().toLocaleString()}</span>
    </div>
  `;

  // deletefunction

  

  

  // Add the new post to the content area
  const contentArea = document.getElementById('contentArea');
  contentArea.prepend(newPost);  // Add post at the top of the content area

  // Clear the input field after posting
  inputField.value = '';

  // Disable the button again after posting
  document.getElementById('postButton').disabled = true;
}

function deletePost(id){
    const element = document.getElementById(id);
    element.remove();
  };

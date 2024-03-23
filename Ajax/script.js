// script.js
var dataDiv = document.getElementById("data");

async function fetchData() {
  try {
    let response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    let data = await response.json();
    console.log(data);
    displayPosts(data.users);
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

function displayPosts(users) {
  let temp = "";
  users.forEach(user => {
    temp += `
      <div class="col-md-3">
        <div class="card mb-3">
          <h3 class="text-center">${user.firstName}</h1> 
          <div class="card-body">
            <h3 class="lead">${user.email}</h3>
            <p class="lead">${user.phone}</p>
          </div>
        </div>
      </div>
    `;
  });
  dataDiv.innerHTML = temp;
}

fetchData();

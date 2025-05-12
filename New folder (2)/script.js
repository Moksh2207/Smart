// script.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    if (user === "admin" && pass === "1234") {
        alert("Login successful");
    } else {
        alert("Invalid credentials");
    }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("signupUser").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPass").value;

    if (username && email && password) {
        alert("Signup successful for " + username);
    } else {
        alert("Please fill all fields.");
    }
});

function searchMaterials() {
    const query = document.getElementById("searchInput").value;
    const results = document.getElementById("searchResults");
    results.innerHTML = query
        ? `<p>Showing results for: <strong>${query}</strong></p>`
        : "<p>No results found</p>";
}

document.getElementById("uploadForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const file = document.getElementById("fileInput").files[0];
    if (file) {
        alert("File uploaded: " + file.name);
    } else {
        alert("Please select a file to upload.");
    }
});

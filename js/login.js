document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    sessionStorage.setItem("userEmail", email);
    window.location.href = "profile.html";
});
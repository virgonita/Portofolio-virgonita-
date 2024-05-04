var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function() {
    stickyNavbar();
};


document.getElementById("sendMessageBtn").addEventListener("click", function(event){
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if(name === "" || email === "" || message === ""){
        alert("Please fill in all fields.");
        return;
    }

    var formData = {
        name: name,
        email: email,
        message: message
    };

    console.log(formData);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});

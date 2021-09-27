var modal = document.getElementsByClassName("modal");

var modalBtn = document.getElementsByClassName("button");

var closeBtn = document.getElementsByClassName("closeBtn");

for (let i = 0; i < modalBtn.length; i++) {
    modalBtn[i].onclick = function() {
        modal[i].style.display = "block";
    }
}

for (let i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function() {
        modal[i].style.display = "none";
    }
}

for (let i = 0; i < modal.length; i++) {
    window.onclick = function(event) {
        if (event.target == modal) {
            modal[i].style.display = "none";
        }
    }
}
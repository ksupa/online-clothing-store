const modalWindow = document.querySelector(".overlay");
const closeButton = document.getElementById('close');
const toggleButtons = document.querySelectorAll('.toggle-btn');

if (modalWindow && closeButton) {
    window.addEventListener("load", function () {
        setTimeout(function() {
            modalWindow.style.display = "block";
        }, 2000);
    });
    
    closeButton.addEventListener("click", function () {
        modalWindow.style.display = "none";
    });
}

toggleButtons.forEach(toggleButtons => {
    toggleButtons.addEventListener('click', function(event) {
        event.stopPropagation();
        this.nextElementSibling.classList.toggle('expanded');
    });
});
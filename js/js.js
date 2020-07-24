var btn = document.querySelector('.btn');
var ul = document.querySelector('ul');

btn.addEventListener('click', function() {
    if (ul.style.display === "none") {

        ul.style.display = "block";
        btn.style.transition = "all 2s";

    } else {
        ul.style.display = "none";
    }

});
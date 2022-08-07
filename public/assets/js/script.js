function coloringgoals(x) {
    x.classList.add('bg-white');
    x.classList.add('rounded-24');
    x.childNodes[1].style.display = "none";
    x.childNodes[3].style.display = "block";
}

function normalgoals(x) {
    x.classList.remove('bg-white');
    x.classList.remove('rounded-24');
    x.childNodes[1].style.display = "block";
    x.childNodes[3].style.display = "none";
}
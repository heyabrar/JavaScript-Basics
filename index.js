let count = 0;
let CountH1 = document.getElementById('Count');
let AddBtn = document.getElementById('AddBtn');
let RedBtn = document.getElementById('RedBtn');

AddBtn.addEventListener('click', AddFunction)
RedBtn.addEventListener('click', RedFunction)

function AddFunction() {
    count = count + 1;
    CountH1.innerHTML = count;
    if (count !== 0) RedBtn.disabled = false
}

function RedFunction() {
    count = count - 1;
    CountH1.innerHTML = count;
    count === 0 ? RedBtn.disabled = true : RedBtn.disabled = false
}


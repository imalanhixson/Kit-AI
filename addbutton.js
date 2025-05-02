const btn = document.getElementById('addBtn');
const errorText = document.getElementById('error')
const redirectBtn = document.getElementById('redirect')

const isAvailable = false

if (isAvailable === true) {
    btn.style.display = "solid";
    errorText.style.display = "none";
    redirectBtn.style.display = "none";
} else {
    btn.style.display = "none";
    errorText.style.display = "solid";
    redirectBtn.style.display = "solid";
}

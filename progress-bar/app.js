
const progressBar = document.getElementById('progressBar');
const valueProgressBar = document.getElementById('valueProgressBar');
const container = document.getElementById('progressBarContainer');

// First solution 
function animateProgressBar(nb){
    progressBar.style.width = `${nb}%`;
    valueProgressBar.innerText = nb + '%';
}

window.addEventListener("DOMContentLoaded", (event) => {
    animateProgressBar(88);
});

// Second solution - use data attribute instead of span element
const progress = document.querySelector('.progress-done');

setTimeout( ()=> {
    progress.style.width = progress.getAttribute('data-done')+ '%';
    progress.style.opacity = '1'; 
}, 500)

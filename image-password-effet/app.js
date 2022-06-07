const backgroundEl = document.querySelector('.background');
const passwordInput = document.getElementById('password');

passwordInput.addEventListener('input', (e)=>{
    const input = e.target.value; 
    const length = input.length;
    const blurValue = 30 - (length *2);
    console.log(blurValue);
    backgroundEl.style.filter = `blur(${blurValue}px)`;
});
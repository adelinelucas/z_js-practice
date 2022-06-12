// let btnSpoiler = document.querySelector(".spoiler button");
// console.log(btnSpoiler);
// // le this ne fontionne pas avec une fonction fléchée, le context de la fonction est différent.
// btnSpoiler.addEventListener("click", function () {
//   console.log(btnSpoiler.nextElementSibling);
//   this.nextElementSibling.classList.add("visible");
//   this.parentNode.removeChild(this);
// });



// 

(function(){
    var spoilersEl = document.querySelectorAll('.spoiler');

    const createSpoilerBtn = function(el){
        let btn = document.createElement('button');
        let span = document.createElement('span');
    
        span.className = 'spoiler-content';
        span.innerHTML = el.innerHTML;
    
        btn.textContent = 'Afficher le spoiler';
        el.innerHTML = '';
        el.appendChild(btn);
        el.appendChild(span);
    
        // ecoute du btn
    
        btn.addEventListener('click', function(){
            btn.parentNode.removeChild(btn);
            span.classList.add('visible');
        })
    }
    
    for(var i = 0; i<spoilersEl.length; i++){
        createSpoilerBtn(spoilersEl[i]);
    }
})()

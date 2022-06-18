(function(){
    let tabs = document.querySelectorAll('.tabs a ');

    let afficherOnglet = function(a, animation ) {
        if (animation === undefined){
            animation = true;
        }
        let li = a.parentNode;
        let div = a.parentNode.parentNode.parentNode;

        if (li.classList.contains('active')){
            return false;
        }
        
        div.querySelector('.tabs .active').classList.remove('active');
        li.classList.add('active');

        // Gestion de l'animation des tabs 
        // div.querySelector('.tab-content.active').classList.remove('active');
        // div.querySelector(a.getAttribute('href')).classList.add('active');
        let activeTab = div.querySelector('.tab-content.active');
        let activeHref = div.querySelector(a.getAttribute('href'));

        if(animation){
            
            activeTab.classList.add('fade');
            activeTab.classList.remove('in');
            const endTransition = function (){
                this.classList.remove('fade');
                this.classList.remove('active');
                activeHref.classList.add('active');
                activeHref.classList.add('fade');
                activeHref.offsetWith;
                activeHref.classList.add('in');
                activeTab.removeEventListener('transitionend', endTransition);
                activeTab.removeEventListener('webkitTransitionend', endTransition);
                activeTab.removeEventListener('oTransitionend', endTransition);
            }
            activeTab.addEventListener('transitionend', endTransition);
            activeTab.addEventListener('webkitTransitionend', endTransition);
            activeTab.addEventListener('oTransitionend', endTransition);
        
        }else {
            activeHref.classList.add('active');
            activeTab.classList.remove('active');
        }
    }

    for(var i = 0; i<tabs.length; i++){
        tabs[i].addEventListener('click', function(e){
            afficherOnglet(this);
        })     
    }

    const hashChange = function(e) {
        let hash = window.location.hash;
        let a = document.querySelector('a[href="' + hash + '"]');
    
        if(a !== null && !a.classList.contains('active')){
            afficherOnglet(a, e !== undefined)
        }
    }

    window.addEventListener('hashchange', hashChange)
    hashChange();
})()
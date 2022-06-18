(function(){

    const scrollY = function(){
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");

        return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    }

    var elements = document.querySelectorAll('[data-sticky]');

    window.makesticky = function(element){
        let rect = element.getBoundingClientRect();
            let offset;
            if(element.getAttribute('data-offset')){
                offset = parseInt(element.getAttribute('data-offset'));   
            }else {
                offset = 0
            }
            let top =rect.top + scrollY(); 
            let width = rect.width;
        
            let fakeEl = document.createElement('div');
            fakeEl.style.width = rect.width + "px";
            fakeEl.style.height = rect.height + "px";

            let constraint ;
            if(element.getAttribute('data-constraint')){
                constraint = document.querySelector(element.getAttribute('data-constraint'))
            }else {
                constraint = document.body;
            }
            let constraintRect = constraint.getBoundingClientRect()
            let constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;
        
            // FONCTIONS
            const onScroll = function(){
                let hasScrollClass= element.classList.contains('fixed');
        
                if(scrollY() > constraintBottom && element.style.position!='absolute')
                {
                    // element.classList.remove('fixed');
                    element.style.position = 'absolute';
                    element.style.bottom = '0';
                    element.style.top = 'auto';
                } else if(scrollY() > constraintBottom)
                {

                }else if(scrollY() > top - offset && element.style.position !='fixed')
                {
                    element.classList.add('fixed');
                    element.style.position = 'fixed'
                    element.style.top = rect.top + offset + "px";
                    element.style.bottom = 'auto'
                    element.style.width = width + "px";
                    element.parentNode.insertBefore(fakeEl, element);
                }else if (scrollY() < top - offset && element.style.position !='static')
                {
                    element.classList.remove('fixed');
                    element.style.position = 'static';
                    if(element.parentNode.contains(fakeEl)){
                        element.parentNode.removeChild(fakeEl);
                    }
                }
            }
        
            const onResize = function(){
                // D'abord on annule les actions de la fonction en scroll pour revenir à l'état initial
                element.style.width= "auto";
                element.classList.remove('fixed');
                element.style.position= 'static';
                fakeEl.style.display= 'none';
                rect = element.getBoundingClientRect();
                constraintRect = constraint.getBoundingClientRect()
                constraintBottom = constraintRect.top + scrollY() + constraintRect.height - offset - rect.height;
                top = rect.top + scrollY(); 
                fakeEl.style.width = rect.width + "px";
                fakeEl.style.height = rect.height + "px";
                fakeEl.style.display = "block";
                onScroll();
            }
        
            // EVENT
            window.addEventListener('scroll', onScroll)
        
            window.addEventListener('resize', onResize)
    }

    for (var i= 0; i< elements.length ; i++){
        makesticky(elements[i]);  
    }
})()
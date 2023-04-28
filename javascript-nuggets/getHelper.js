const heading = document.querySelector('.heading');
// console.log(heading)
const listItems = document.querySelectorAll('.list-item')
// console.log(listItems)

const getElement = (selector, isList) =>{
    if(isList){
        const elList = [...document.querySelectorAll(selector)]
        if(elList.length <1){
            throw new Error(`Please double check selector : ${selector}`)
        }
        return elList
    }
    const el = document.querySelector(selector);
    if(el) return el
    else throw new Error(`Please double check selector : ${selector}`)
}
// refactoring

const getEl = (selector, isList) =>{
    const el = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector)

    // not a list - exist or not
    if(!isList && el) return el
    // is list - empty or not
    if(isList && !el.length<1) return el
    // or another refactoring
    //if((!isList && el) || (isList && !el.length<1)) return el
    throw new Error(`Please double check selector : ${selector}`)
}

// console.log(getElement('.heading'))
// console.log(getElement('.list-item', true))
// console.log(getElement('.heaing'))
console.log(getEl('.heading'))
console.log(getEl('.list-item', true))
console.log(getEl('.heaing'))
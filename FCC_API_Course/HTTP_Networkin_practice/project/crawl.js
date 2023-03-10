const {JSDOM} = require('jsdom');

async function crawlPage(baseURL, currentURL, pages){

    const baseURLObj = new URL(baseURL)
    const currentURLObj = new URL(currentURL)
    // we check if the current URL is on the same domain as the base URL
    if(baseURLObj.hostname !== currentURLObj.hostname){
        return pages;
    }

    //we check if we have already crawled this page.  
    const normalizeCurrentURL = normalizeURL(currentURL)
    if(pages[normalizeCurrentURL] > 0){
        pages[normalizeCurrentURL] ++;
        return pages
    }
    pages[normalizeCurrentURL] = 1
    console.log(`actively crawling: ${currentURL}`)

    try{
        const resp = await fetch(currentURL)

        if(resp.status > 399){
            console.log(`error in fetch with status code : ${resp.status} on page: ${currentURL}`);
            return; 
        }

        const contentType = resp.headers.get('content-type');
        if(!contentType.includes('text/html')){
            console.log(`non html response, content type: ${contentType} on page: ${currentURL}`);
            return pages; 
        }
        // console.log(await resp.text())
        const HTMLBody = await resp.text();
        nextURLs = getURLsFromHTML(HTMLBody, baseURL)

        for (const nextUrl of nextURLs){
          pages = await crawlPage(baseURL, nextUrl, pages)  
        }
    }catch(err){
        console.log(`error in fetch: ${err.message} on page: ${currentURL}`)
    }   

    return pages;
}

function getURLsFromHTML(htmlBody, baseURL){
    const urls = [];
    const domObj = new JSDOM(htmlBody)
    const linkElements = domObj.window.document.querySelectorAll('a');
    for (const linkEl of linkElements){
        // console.log(linkEl)
        if(linkEl.href.slice(0,1) === '/'){
            // relative url
            // if the url is invalid the object URL will throw an error.
            try{
                const urlObj = new URL(baseURL+linkEl.href)
                urls.push(urlObj.href)
            }catch(err){
                console.log(`error with relative url: ${err.message}`)
            }
            
        }else{
        // absolute url
            try{
                const urlObj = new URL(linkEl.href)
                urls.push(urlObj.href)
            }catch(err){
                console.log(`error with absolute url: ${err.message}`)
            }
        }
    }
    return urls
}

function normalizeURL(urlString){
    const urlObj = new URL(urlString);
    const hostPath= `${urlObj.hostname}${urlObj.pathname}`
    if(hostPath.length >0&& hostPath.slice(-1) === '/'){
        return hostPath.slice(0,-1)
    }   
    return hostPath
}

module.exports = {
    normalizeURL,
    getURLsFromHTML,
    crawlPage
}
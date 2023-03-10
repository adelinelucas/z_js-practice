const {crawlPage} = require('./crawl.js')
const {printReport} = require('./report.js');

async function main (){
    if(process.argv.length <3){
        console.log('no website provided')
        process.exit(1)
    }
    if(process.argv.length >3){
        console.log('too many command line args')
        process.exit(1)
    }

    const baseURL = process.argv[2];
    console.log(`starting crawl of ${baseURL}`);
    const pages = await crawlPage(baseURL, baseURL, {})
    // for(const page of Object.entries(pages) ){
    //     console.log(page)
    // }
    printReport(pages)
    
    // for (const arg of process.argv){
    //     console.log(arg )
    // }
    // we checked for 3 beacause if we print arg, we can see 3 step:
    // 1. the frist print is the frist argument to any program is always the name of the program. 
    // 2. second argument is the name of our code or the entry point file. 
    // 3. third argument is the one that we are passing in to our programm. 


}

main()

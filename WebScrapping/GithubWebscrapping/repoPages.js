const cheerio = require('cheerio');
const request = require("request");
const getIssueHtml = require('./Issue');


function getReposPageHtml(url,topicName){
    request(url,cb);
    function cb(error,response,html){
        if(error){
            console.log("Error",error);
            return;
        }
        getReposLink(html);
        // console.log(html);
    }

    function getReposLink(html){
        let $ = cheerio.load(html);
        let repoLins = $(".text-bold.wb-break-word");

        console.log(topicName);

        console.log(`------------------------
        ----------------`)
        for(let i=0;i<repoLins.length;i++){
            let links = $(repoLins[i]).attr("href");
            // let fullLink = `https://github.com/${links}`;


            // Go to issues Page
            let fullLink = `https://github.com/${links}/issues`;
            let repoName = links.split("/").pop();
            getIssueHtml(fullLink,topicName,repoName);
            // console.log(fullLink);
        }
    }
}

module.exports=getReposPageHtml;
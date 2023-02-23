const cheerio = require('cheerio');
const request = require("request");
const fs=require('fs');
const pdfkit = require("pdfkit");
const path=require('path');


function getIssueHtml(url,topicName,repoName){
    request(url,cb);

    function cb(error,response,html){
        if(error){
            console.log("Error",error);
            return;
        }
        else if(response.statusCode==404){
            console.log("Page Not Found!!!");

        }

        // console.log(html);
        getIssues(html);
    }

    function getIssues(html){
        // console.log(topicName,`-------------------------`);
        let $ = cheerio.load(html);
        let issues = $(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
        console.log(issues.length);
        let arr=[];
        for(let i=0;i<issues.length;i++){
            let issueLink = $(issues[i]).attr("href");
            // console.log(issueLink);
            arr.push(issueLink);
        }

        let folderPath = path.join(__dirname,topicName);
        dirCreater(folderPath);
        let filePath = path.join(folderPath,repoName+".pdf");
        let text = JSON.stringify(arr);

        let pdfDoc = new pdfkit();
        pdfDoc.pipe(fs.createWriteStream(filePath));
        pdfDoc.text(text);
        pdfDoc.end();

        fs.writeFileSync(filePath,text);
        // console.log(topicName,"    ",arr);
    }


}

function dirCreater(folderPath){
    if(fs.existsSync(folderPath)==false){
        fs.mkdirSync(folderPath);
    }
}

module.exports = getIssueHtml;
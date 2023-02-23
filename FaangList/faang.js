const cheerio = require('cheerio');
const request = require("request");
const fs = require('fs');

let url = "https://www.pepcoding.com/faangList2.0";

request(url,cb);

function cb(error,response,html){
    if(error){
        console.log('Error', err);
        return;
    }
    // console.log(html);
    getQuestionsLink(html);
}


function getQuestionsLink(html){
    let $ = cheerio.load(html);
    //Topic Name
    let topic= $(".container.med.questions .section.search-nav .row .col.l7.s12.m12 .card .card-content .collapsible li .collapsible-header.bold.active");
    let topicName = $(topic).text();
    // console.log(topicName);


    // console.log(`TOPIC NAME`)


    //Question Links
    let quesLinks = $(".container.med.questions .section.search-nav .row .col.l7.s12.m12 .card .card-content .collapsible li .collapsible-body .collection .collection-item a");
    // console.log(quesLinks.length)
    for(let i=0;i<quesLinks.length;i++){
        let QuesName=$(".container.med.questions .section.search-nav .row .col.l7.s12.m12 .card .card-content .collapsible li .collapsible-body .collection .collection-item .no-padding.col.l10.s9.m10.push-s1.no-margin.questions-name");
        let qn=$(QuesName[i]).text();
        // console.log(qn);
        // let quesName = $(quesLinks[i]).text();
        let quesLink = $(quesLinks[i]).attr("href");
        let text = String(quesLink);
        
        let data = qn+"\n";
        fs.appendFileSync("question.txt",data);
        fs.appendFileSync("question.txt",text+"\n");
    }  
}
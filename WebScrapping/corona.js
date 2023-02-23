const cheerio = require('cheerio');
const request = require("request");
const chalk = require('chalk');

request('https://www.worldometers.info/coronavirus/',cb);

console.log("Before");

function cb(error, response, html) {
    if (error )console.error('error:', error); // Print the error if one occurred
    else{
        handleHtml(html);
        // console.log('body:', body); // Print the HTML for the Google homepage.
    }

  };

  console.log("After");

  function handleHtml(html){
     let setTool =  cheerio.load(html);
     let h1 = setTool("#maincounter-wrap span");

     let total = setTool(h1[0]).text();
     let deaths = setTool(h1[1]).text();
     let rec = setTool(h1[2]).text();

     console.log(chalk.gray("Total Cases: "+total));
     console.log(chalk.red("Deaths: "+deaths));
     console.log(chalk.yellow("Recovered: "+rec));
  }
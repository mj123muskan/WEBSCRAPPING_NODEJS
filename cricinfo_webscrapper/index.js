const request = require('request');
const cheerio = require('cheerio');
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary";

//get last ball commentary text

request(url,cb);

function cb(error,response,html)
{
    if(error)
    {
        console.error("error is: ",error);
    }else{
        extractHtml(html);
    }
}

function extractHtml(html){
    const $ = cheerio.load(html);
    let elemsArr = $(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    let text = $(elemsArr[0]).text();
    console.log(text);
}
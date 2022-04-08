const cheerio = require('cheerio');
const request = require('request');

const req = request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard', function (error, response, body) {
    if(error)
    {
        console.error('error:', error); 
    }else{
        // console.log('statusCode:', response && response.statusCode); 
        // console.log('body:', body); 
        
        findPlayerOfTheMatch(body);
    }

  });
  
  function findPlayerOfTheMatch(html)
  {
      let setTool = cheerio.load(html);
      let a = setTool('div.ds-ml-3');
      console.log(setTool(a).length);  
      for(let i =0;i<a.length;i++)
      {
          console.log(setTool(a).text());  
      }
      

  }

const fs = require('fs');
const http = require('http')
const server = http.createServer();
const indexPage = fs.createReadStream("./index.html");
server.on('request', (req, res) => {
  // let page;
  // console.log('Request received for:', req.url)
  // indexPage.on("data", (chunk)=>{
  //   page += chunk;
  // });
  // indexPage.on("end", ()=>{
  //   res.end(page);
  // });
  // THIS DOESNT WORK
  // REadstream grabs the literal html code. 
  // i must use readFile in order to get the html file. 
  // the exercise documentation tells us to use createreadstream 
  // but that doesnt work
  // uncomment the above code and itll just print the literal html onto the page
  fs.readFile("./index.html", (error, file)=>{
    if(error)res.end(error);
    res.end(file);

  });
  
});
server.listen(8084, ()=>{
  console.log('listening on 8084');
});
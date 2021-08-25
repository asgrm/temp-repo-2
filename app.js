// https://www.youtube.com/watch?v=Oe421EPjeBE&t=20s
// const http = require('http');
// const server = http.createServer((req, res) => {
//   if(req.url === '/') {
//     return res.end('main info');
//   }
//   if (req.url === '/about') {
//     return res.end('about us');
//   }
//   return res.end(`<h1>not found</h1>
//   <a href="/">go back</a>`)
  
// });

// server.listen(5000);

const _ = require('lodash');
const items = [1,  [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
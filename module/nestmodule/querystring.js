const url = require('url');
const querystring = require('querystring');


const parsedUrl = url.parse('http://www.github.co.kr/?page=3&limit=10&category=nondejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('queryString.parse(): ', query);
console.log('querystring.stringify(): ', querystring.stringify(query));
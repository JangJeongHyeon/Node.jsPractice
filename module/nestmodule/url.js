const url = require('url')

const URL = url.URL
const myURL = new URL('https://naver.com')
console.log(`new URL(): ${myURL}`)
console.log(`url.format(): ${url.format(myURL)}`)
console.log('----------------------------------')
const parsedUrl = url.parse('https://search.naver.com/search.naver?where=nexearch&query=%EC%9D%8C%EB%B0%94%ED%8E%98&sm=top_lve&ie=utf8')
console.log('url.parse(): ',url.parse(parsedUrl))
console.log('url.format(): ', url.format(parsedUrl))

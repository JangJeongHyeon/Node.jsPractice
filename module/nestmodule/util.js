const util = require('util');
const crypto = require('crypto');
const donUseMe = util.deprecate((x, y) => {
    console.log(x + y);
},'dontUseMe 함수는 deprecated 됐으니 사용하지 마세요!');

donUseMe(1,2);

const randdomBytesPromise = util.promisify(crypto.randomBytes);
randdomBytesPromise(64).then((buf)=>{
    console.log(buf.toString('base64'));
})
.catch((error)=>{
    console.error(error);
});
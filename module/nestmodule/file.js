const fs = require('fs');

fs.readFile('./sample.txt', (err, data)=>{
    if(err){
        throw err;
    }
    console.log(data);
    console.log(data.toString());
});

fs.writeFile('./write.txt', '글이 입력됩니다.', (err)=>{
    if(err){
        throw err;
    }

    fs.readFile('./write.txt', (err, data)=>{
        if(err){
            throw err;
        }
        console.log(data.toString());
    })
})
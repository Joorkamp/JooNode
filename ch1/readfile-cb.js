const fs = require('fs')
// 파일을 읽어 들입니다.

fs.readFile('text.txt','utf-8',function(err,data){
  console.log(data)
})

const fs = require('fs')

// ---동기적으로 파일을 읽어 들입니다. ---(1)
const data = fs.readFileSync('test.txt','utf-8')
console.log(data)

// --- 비동기적으로 파일을 읽어 들입니다. ---(2)
fs.readFile('test.txt', 'utf-8', readHandler)

function readHandler(err,data){
  console.log(data)
}

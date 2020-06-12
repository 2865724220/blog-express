const fs = require('fs')
const path = require('path')
const readline = require('readline')

const fileName = path.join(__dirname, '../', '../', 'logs', 'access.log')

// 创建readstream
const readStream = fs.createReadStream(fileName)

// 创建 readline 对象
const rl = readline.createInterface({
    input:readStream
})

let chromeNum = 0;
let sum =0;

rl.on('line',(lineData)=>{
    if(!lineData){
        return
    }
    // 记录总行数
    sum++
    const arr = lineData.split('--')
    if(arr[2] && arr[2].indexOf('Chrome') >0){
        chromeNum++
    }
})

// 监听读取完成
rl.on('close',()=>{
    console.log('read end,chromeNum',chromeNum)
})
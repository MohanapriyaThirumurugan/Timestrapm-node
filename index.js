const port= process.env.PORT ||8000;// create the port
const http=require('http')
const fs=require('fs')
// let today= new Date().toISOString()
const server=http.createServer((req,res)=>{
    let currentdata=+ new Date()
    let today=new Date().toISOString()
    fs.writeFileSync(`Datetime/${currentdata}.txt`,`${today}`,'utf8')
    let data=fs.readFileSync(`Datetime/${currentdata}.txt`,'utf8')
    res.writeHead(200,{
      "content-type":"text/html"
    })
    
    res.end(data)
})
server.listen(port,()=>console.log(`aplication listen to ${port}`))


const db = require('./db.js')

module.exports.add = async(title)=>{
    //读取之前的任务
    const list = await db.read()
    //往里面添加一个 title 的任务
    list.push({title,done:false})
    //存储任务到文件
    await db.write(list)
}
//     fs.readFile(dbPath,{flag: 'a+'},(error,data)=>{
//         if (error){
//             console.log(error)
//         } else{
//             let list
//             try {
//                 list = JSON.parse(data.toString())
//             }catch (error2){
//                 list = []
//             }
//             console.log(list)
//             const task = {
//                 title:title,
//                 done:false
//             }
//             list.push(task)
//             const string = JSON.stringify(list)
//             fs.writeFile(dbPath,string+'\n',(error3)=>{
//                 if (error3){
//                     console.log(error3)
//                 }
//             })
//         }
//     })

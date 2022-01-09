const fs = require('fs')

fs.writeFileSync('notes.txt', 'my name is aviya')

fs.copyFileSync('notes.txt', 'notes-copy.txt');

fs.renameSync('notes-copy.txt', 'example.txt')

fs.readdir('./',(err,result)=>{
   if(err){
       console.log(err);
   }
   else{
    console.log(result);
   }
})
// fs.mkdirSync('./', (err)=>{
//     console.log(err);
// })
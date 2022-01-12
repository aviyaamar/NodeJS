const express =  require('express')
const app =  express();
// const users = require('./users.json')

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('success using get')
})
app.get('/number', (req, res)=>{
    res.send('success using get')
});
app.post("/number", (req, res) => {
    res.status(201).send( "success using post" );
  });

  app.delete("/number", (req, res) => {
    res.send("success using delete");
  });

  app.put("/number", (req, res) => {
    res.send("success using put");
  });

const PORT = 3003
app.listen(PORT, ()=>{
    console.log(`listening to port: ${PORT}`);
})
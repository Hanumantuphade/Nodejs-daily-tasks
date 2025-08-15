const cookieParser = require('cookie-parser');
const expreess = require('express');
const app= expreess();

app.use(cookieParser())
app.get('/', (req, res) => {

  res.cookie('name',"hanumantuphade")
  res.send('set cookie');
});
 
app.get('/getcokie',(req,res)=>{
  console.log(req.cookies);
  res.send('check console for cookie value');
  
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
const fs = require('fs');
const http = require('http');


// writing a File:
fs.writeFile('Hey.txt','hello i am comming node.js to learn file system operations',(err)=>{
  if (err) throw err;
  console.log('File has been written successfully!');
})

//reading a File:-
fs.readFile('Hey.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

//appending a File:-
fs.appendFile('Hey.txt', '\n I am appending this text.', (err) => {
  if (err) throw err;
  console.log('Text has been appended to the file!');
});

//unlinking a File:-
fs.unlink('hello.txt', (err) => {
  if (err) throw err;
  console.log('File has been deleted successfully!');
});


// create server using http module:-

const server = http.createServer((req,res)=>{
  res.end("hello i honney")
})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

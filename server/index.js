const {app} = require('./server.js');
const port = 3000;

app.listen(port, (err)=>{
  if(err)throw err;
  console.log(`Listening on port: ${port}`);
});

const express = require('express');
const cors = require('cors');
let logger = require('./middleware/logger.js');
const api = require('./routes/apiRoutes.js');
const app = express();

app.use("/api",api);
app.use(cors());
app.use(logger);
app.use(express.json());

app.get('/message', (req, res) => {
  res.json({message:"welcome to the landing page"});  
});

app.get('/api/users', (req, res) => {
  res.json({users:"yeye", message:"testing"});
});

// app.post('/', (req, res) => {
//   data.getAllEmployees() //
//   .then(data => {
//           res.json(data.filter(empolyee => {if(empolyee.employeeCode === req.body.code){
//             return empolyee;
//           } }));
// })
// });

app.listen(8000, () => {
  console.log('Listening to port 8000....');
});
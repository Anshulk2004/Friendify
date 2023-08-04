const express = require('express');
const data = require('../database/data.js');

const router = express.Router();

router.use(express.json());
router.get('/api/:id', (req, res) => {
    
    data.getEmployee(req.params.id)
  .then(data => {
    if(req.query.limit){
        res.status(200).json(data.slice(0, req.query.limit));
    }
    else{
            res.status(200).json(data);
        }
        
      })
});

router.post('/', (req, res) => {
    data.addEmployee(req.body.employee).then(() => {
        res.status(201).json({success: true , message:"employee added successfully"});
    })
    .catch(err => {res.status(400).json({error: err});  
    });
});

router.put('/:id', (req, res) => {

    data.updateEmployee(req.body.employee,req.params.id)
    .then(() => {
        res.status(201).json({success: true, message:"employee updated successfully"});
    })
    .catch(err=>{
        res.status(400).json({error: err});
    });
})

module.exports = router;
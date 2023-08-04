const mongoose = require('mongoose');

const employee = new mongoose.Schema({
    "userId":   String,
    "jobTitleName":String,
    "firstName":String,
    "lastName":String,
    "preferredFullName":String,
    "employeeCode":String,
    "region":String,
    "phoneNumber": String,
    "emailAddress": String
    
});

module.exports = mongoose.model('Employee', employee);
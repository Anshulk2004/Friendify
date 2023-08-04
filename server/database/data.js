let mongoose = require('mongoose');
// let Data = require('./data.json');
let Employee = require('./employee.js');
mongoose.connect("mongodb://127.0.0.1:27017/practicedb");


async function getAllEmployees(){
    let data =  await Employee.find();
    return data;
}

async function removeEmployee(id){
    let data = await Employee.findByIdAndRemove(id);
    console.log(data);
}

async function getEmployee(emplyeeID){
    let employee_list = await Employee.find();
    let filtered_data = employee_list.filter(singleEmployee => {
        return singleEmployee.employeeCode === emplyeeID;
    })
    return filtered_data[0];
}

async function addEmployee(newEmployee){

    let employee = new Employee(newEmployee);
    console.log(employee);
    await employee.save();
}

async function updateEmployee(newEmployee, employeeCodeUD){
    let employee = await Employee.findOneAndUpdate({employeeCode:employeeCodeUD},newEmployee);
    console.log(employee); 
}

// code to save our data on the database
// async function save(data) {
//     let employee = new Employee(data);
//     await employee.save();
//     // other syntax is 
//     // await Employee.create(data);
// };

// Data.Employees.map((singleEm)=>{
//     save(singleEm);
// })


module.exports = {
    getAllEmployees,
    removeEmployee,
    getEmployee,
    addEmployee,
    updateEmployee
}
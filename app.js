const inquirer = require('inquirer');
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: '',
});

connection.connect(function(err){
  if (err) throw err;
  options();
})

function choose() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'welcome to the employee database... please select one.',
      choices: [
        'View employees',
        'View roles',
        'View deparemnts',
        'Add an employee',
        'Add a department',
        'Add a role',
        'Update an employee role',
        'Delete an employee',
        'EXIT'
      ].then(function (answer) {
        
      })
  })
}
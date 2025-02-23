// Task 1 Creating an Employee Class 
 // Creating a HR system with emplyee class 
  class Employee { 
      constructor(name,id, department,salary) {
        this.name= name;  /// Employee's name 
        this.id= id; // Employee's Id number
        this.department= department// Department the employee belongs 
        this.salary= salary
        }
    // Method to get employee details in a string format :
        getDetails () { 
            return `Employee:${this.name}, ID: ${this.id},Department: ${this.department}, Salary:$${this.salary}`;
        }
        // Method to calculate the employee's annual salary  : 
        calculateAnnualSalary() {
             return this.salary*12;
        }
    } 
    // Test Case: 
    const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
    console.log(emp1.getDetails()); 
    // Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
    
    console.log(emp1.calculateAnnualSalary());    // annual salary 
    // Expected output: 60000 git push
    
    // Task 2- Created Manager Class with Inheritance 

      // Class manager inherits from employee : 
        class Manager extends Employee {
          constructor(name, id, department, salary, teamSize) {
            super(name, id, department, salary); // calling employee constructor 
            this.teamSize = teamSize; // adding a new property 
        }
         // Overriding getDetails() to include the team size
      getDetails() {
        return `Manager: ${this.name}, ID: ${this.id},
         Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
      }
      calculateBonus() { // Method to calculate 10%  
        const annualSalary = this.calculateAnnualSalary(); 
        return annualSalary * 0.10 ; // calculating the 10% 
      }
            }
    // Test Case : 
    const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // 
    console.log(mgr1.getDetails());
    // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
    
    console.log(mgr1.calculateBonus()); 
    // Expected output: 9600 

    // Task 3- Creating a Company class 
    class Company { 
        constructor (name) { 
            this.name=name;// the companys name 
            this.employees= [] ; // Array to store the employee objects 
        }
        //Method to add an employee to the company
        addEmployee(employee) {
            this.employees.push(employee);
            }
        //Method to list all employees 
        listEmployees() { 
            this.employees.forEach(emp=>console.log(emp.getDetails()));
        }
            }
    // Test Cases : 
    const company = new Company ("TechCorp");
    company.addEmployee(emp1);
    company.addEmployee(mgr1);
    company.listEmployees();
    // Expected output:
    // "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
    // "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

// Task 4- Implementing a payroll System 
  //Adding payroll calculating to company
   Company.prototype.calculateTotalPayroll=function() {
    return this.employees.reduce((total,emp)=> { 
        let annualSalary = emp.calculateAnnualSalary();
        if (emp instanceof Manager) {
            annualSalary+= emp.calculateBonus() ; //Including bonus for managers
        }
    return total + annualSalary ; 
    },0);
};
  // Test Case: 
  console.log(company.calculateTotalPayroll()); // Expected output: 165600 (assuming emp1 and mgr1 salaries) 

  // Task 5- Implementing Promotions 
    // Adding promotion functionality to company 
  Company.prototype.promoteToManager= function(employee,teamSize) {
    const index= this.employees.indexOf(employee);
    if(index !==-1) { 
        const promotedManager= new Manager ( 
            employee.name,
            employee.id,
            employee.department,
            employee.salary,
            teamSize
        );
        this.employees[index] = promotedManager; // Replacing employee with manager 
    } ;
  };
  // Test Case : 
  company.promoteToManager(emp1, 3);
company.listEmployees();
// Expected output: "Manager: Alice Johnson, ID: 101, Department: Sales, Salary: $5000, Team Size: 3"
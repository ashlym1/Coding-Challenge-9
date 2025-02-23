// Task 1 Creating an Employee Class 
 // Creating a HR system with emplyee class 
  class Employee { 
      constructor (name,id, department,salary) {
        this.name= name;  /// Employee's name 
        this.id= id; // Employes Id number
        this.department= department// Department the employee belongs 
        this.salary= salary
        }
    // Method to get employee details in a string format :
        getDetails () { 
            return `Emplyee:${this.name}, ID: ${this.ID},Department: ${this.department}, Salary:$${this.salary}`;
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
    
    console.log(emp1.calculateAnnualSalary());    // anual salary 
    // Expected output: 60000 git push
    
    // Task 2- Created Manager Class with inhereitance 

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
    class comapny { 
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
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
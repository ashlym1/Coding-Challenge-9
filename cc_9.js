// Task 1 Creating an Employee Class 

    // Creating a HR system with emplyee class 
    class Employee { 
        constructor (name,id, department,salary){
            this.name= name;  /// Employee's name 
            this.id= id; // Employes Id number
            this.department= department// their department 
            this.salary= salary
        };
        // Method that returns employee details :
        getDetails () { 
            return `Emplyee:${this.name}, ID: ${this.ID},
            Department: ${this.department}, Salary:$${this.salary}`;
        }
        // Method that return the employyes annual salary : 
    calculateAnnualSalary() {
        return this.salary*12;
    }
    };//
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
        // Adding "Manager" label and team size to the details
        return `Manager: ${this.name}, ID: ${this.id},
         Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
      }
      calculateBonus() { // Adding a method that return 10% of the managers annual salary 
        const annualSalary = this.calculateAnnualSalary(); // Getting the annual salary from them employee method
        return annualSalary * 0.10 ; // calculating the 10% 
      }
            }
    // Test Case : 
    const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5); // 
    console.log(mgr1.getDetails());
    // Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
    
    console.log(mgr1.calculateBonus()); 
    // Expected output: 9600 
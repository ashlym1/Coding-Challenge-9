// Task 1 Creating an Employee Class 
// Creating a HR system with emplyee class 
class Employee { 
    constructor (name,id, department,salary){
        this.name=name;  /// Employee's name 
        this.id=id; // Employes Id number
        this.department=department// their department 
        this.salary=salary
    }
    // Method that returns employee details :
    getDetails () { 
        return `Emplyee:${this.name}, ID: ${this.ID},
        Department: ${this.department}, Salary:$${this.salary}`;
    }
    // Method that return the employyes annual salary : 
calculateAnnualSalary() {
    return this.salary*12;
}
}
// Test Case: 
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary());    // anual salary 
// Expected output: 60000 
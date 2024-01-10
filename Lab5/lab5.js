//First of all, i create Person Class
class Person {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.healthRate = 100;
      this.money = 1000;
    }
  
    sleep(hours) {
      if (hours === 7) return 'happy';
      else if (hours < 7) return 'tired';
      else return 'lazy';
    }
  
    eat(meals) {
      if (meals === 3) this.healthRate = 100;
      else if (meals === 2) this.healthRate = 75;
      else if (meals === 1) this.healthRate = 50;
    }
  
    buy(items) {
      if (items === 1) this.money -= 10;
    }
  }

//then i created Employee class which inherets from Person class
class Employee extends Person {
    constructor(name, id, email, isManager, salary) {
      super(name, id, email);
      this.isManager = isManager;
      if (salary >= 1000) {
        this.salary = salary;
      } else {
        throw new Error('Salary must be 1000 or more.');
      }
      this.workMood = '';
    }
  
    work(hours) {
      if (hours === 8) this.workMood = 'happy';
      else if (hours > 8) this.workMood = 'tired';
      else this.workMood = 'lazy';
    }
  }

// then the implementation of Office class
  class Office {
    constructor(name) {
      this.name = name;
      this.employees = [];
    }
  
    getAllEmployees() {
      return this.employees;
    }
  
    getEmployee(empId) {
      const employee = this.employees.find(emp => emp.id === empId);
      if (!employee) return 'Employee not found.';
      if (employee.isManager) {
        const { name, id, email, workMood, isManager, healthRate } = employee;
        return { name, id, email, workMood, isManager, healthRate };
      } else {
        return employee;
      }
    }
  
    hire(employee) {
      this.employees.push(employee);
    }
  
    fire(empId) {
      this.employees = this.employees.filter(emp => emp.id !== empId);
    }
  }
  


// Sample usage and implemnting the functions
  const office = new Office('My Office');

  function addEmployee() {
    const name = prompt('Enter name:');
    const id = prompt('Enter ID');
    const email = prompt('Enter email:');
    const isManager = prompt('Are they a manager? (yes/no)').toLowerCase() === 'yes';
    const salary = parseInt(prompt('Enter salary:'));

    const employee = new Employee(name, id , email, isManager, salary);
    office.hire(employee);
    console.log('Employee added.');
  }

  function displayEmployee() {
    const empId = prompt('Enter employee ID:');
    const employeeData = office.getEmployee(empId);
    console.log(employeeData);
    alert(employeeData);
  }

  
let userInput;
do {
  userInput = prompt('Enter your choice (add/display/q):');
  switch (userInput) {
    case 'add':
      addEmployee();
      break;
    case 'display':
      displayEmployee();
      break;
    case 'q':
      console.log('Exiting...');
      break;
    default:
      console.log('Invalid choice.');
      break;
  }
} while (userInput !== 'q');
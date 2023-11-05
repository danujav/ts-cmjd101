class Employee {
    private empId: number;
    private name: string;
    private dob: Date;
    private salary: number;

    constructor(empId: number, name: string, dob: Date, salary: number) {
        this.empId = empId;
        this.name = name;
        this.dob = dob;
        this.salary = salary;
    }

    setSalary(salary: number): void {
        if(salary > 0) {
            this.salary = salary;
        }
    }
    getSalary(): number {
        return this.salary;
    }

    printDetails(): void {
        console.log(`EmpId: ${this.empId}, Name: ${this.name}, DOB: ${this.dob}, Salary: ${this.salary}`)
    }
}

let emp1: Employee;
emp1 = new Employee(1, 'John', new Date('1995-09-78'), 10000);
emp1.printDetails();

/*emp1.salary = -10000;
console.log('salary: ',emp1.salary);*/


emp1.setSalary(10000); // calling setter
console.log('salary: ',emp1.getSalary()); // calling getter
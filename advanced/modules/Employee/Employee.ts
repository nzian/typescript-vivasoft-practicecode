//FileName : Employee.ts
export class Employee{
    /**
     * initiate with employees array
     * @param employees <array><object>
     */  
    constructor(private employees?: [{id: number, name: string, designation: string}]){  
    }
    /**
    * add a employee 
    */
    public addEmployee(employee: {id:number, name: string, designation: string}): void {
        employee.id = this.between(100, 1000000);
        this.employees.push(employee);
    }
    /**
     * Get all employees 
     * @returns <array>Employees 
     */
    public getSubtasks(): any {
        return this.employees;
    }

    /**
    * Returns a random number between min (inclusive) and max (inclusive)
    */
    between(min: number, max: number): number {  
        return Math.floor(
        Math.random() * (max - min + 1) + min
        )
    }
    
} 
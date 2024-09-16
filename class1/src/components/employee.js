import React from "react";

export default function Employee() {
    const employees = [
        { name: 'John', salary: 3000 },
        { name: 'Jane', salary: 3500 },
        { name: 'Doe', salary: 4000 }
    ];
      
    const employeesWithYearlySalary = employees.map(employee => {
        return {
            ...employee,
            yearlySalary: employee.salary * 12
        };
    });

    return (
        <div>
            <h1>Employee Salaries</h1>
            <ul>
                {employeesWithYearlySalary.map((employee, index) => (
                    <li key={index}>
                        {employee.name}: Monthly Salary = ${employee.salary}, Yearly Salary = ${employee.yearlySalary}
                    </li>
                ))}
            </ul>
        </div>
    );
}
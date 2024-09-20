const company = {
        departments: [
            {
                departmentName: 'Engineering',
                employees: [
                    {
                        name: 'Alice',
                        salary: 100000,
                        subordinates: [
                            {
                                name: 'Bob',
                                salary: 80000,
                                subordinates: [
                                    {
                                        name: 'Charlie',
                                        salary: 60000,
                                        subordinates: []
                                    } ] } ] },
                    {
                        name: 'David',
                        salary: 90000,
                        subordinates: []
                    }]},
           {
                departmentName: 'Sales',
                employees: [
                    {
                        name: 'Eve',
                        salary: 85000,
                        subordinates: [
                            {
                                name: 'Frank',
                                salary: 70000,
                                subordinates: []
                            }]},
                    {
                        name: 'Grace',
                        salary: 95000,
                        subordinates: []
                    }] }]};

function calculateDepartmentSalary(x){
let totalSalary = x.salary||0;//crucial for the code; if a salary is not there it sends back zero instead of undefined.
if(x.employees){//if employees
    for (let employee of x.employees){
        totalSalary+=calculateDepartmentSalary(employee);
    }}
if(x.subordinates){//if suboordinates
for (let subordinate of x.subordinates){
    totalSalary+=calculateDepartmentSalary(subordinate);
}


}
    return totalSalary
}
console.log(calculateDepartmentSalary(company.departments[1]));

function calculateCompanySalary(x){
    let arr = [];
    for (let dept of x.departments){
        arr.push(calculateDepartmentSalary(dept));
    }
    let companyTotal = arr.reduce((x,y)=> x+y,0);
    console.log(companyTotal);
    return;
}
calculateCompanySalary(company);


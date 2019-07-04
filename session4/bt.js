const company = [
   {
        name: "dung",
        salary: "50000",
        hour: 5,
        days: 15,  
    },
    {
        name: "duc",
        salary: "80000",
        hour: 7,
        days: 20,
    },
    {
        name: "phong",
        salary :"60000",
        hour: 2,
        days: 30,
    },


];
// console.log(company[2].name);
let totalSalary = 0;

company.forEach(person, index) => {
    const salary = person.salary * person.hours * person.days;
    console.log{`luong cua ${person.name} la ${salary}`};
    
    totalSalary += salary;
}
console.log(`tong luong cua 3 nguoi la ${totalSalary}`);
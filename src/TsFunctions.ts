// parameter type void
function printMarks(name: string, mark: number): void {
    // console.log('Name: ' + name + ', Mark: ' + mark);
    console.log(`Name: ${name}, Mark: ${mark}`)
}
printMarks('John', 85);

// return type function
function getTotal(mark1: number, mark2: number): number {
    return mark1 + mark2;
}

let total2:number = getTotal(85, 90);
console.log('total: ',total2);

// optional parameter
function printDetail(id: number, name: string, email?: string): void {
    console.log('ID: ' + id + ', Name: ' + name);
    if (email != null)
        console.log('Email: ' + email);
}
printDetail(101, 'John', 'john@gmail.com');
printDetail(102, 'Saman');

//default parameter
function generateRandomNumber(): number {
    return Math.random();
}
console.log('random value: ',generateRandomNumber());

//arrow function
let greet = (name: string) => {
    console.log(`Good morning ${name}!`);
}
greet('Hashan');
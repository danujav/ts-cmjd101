interface Human {
    name: string;
    age: number;

    eat(): void;
}

let boy: Human = {
    name: 'John',
    age: 20,
    eat() {
        console.log('Boy is eating');
    }
}
boy.eat();

class Girl implements Human {
    age: number;
    name: string;

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }

    eat(): void {
        console.log('Girl is eating!')
    }
}

let girl: Girl = new Girl(10, 'Jane');
girl.eat();
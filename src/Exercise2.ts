import { Animal } from './Exercise1';
import { Student } from './Exercise1';

class Dog implements Animal {
    name: string;
    type: string;

    eat(): void {
        console.log('Dog is eating');
    }
}

let student: Student = new Student();
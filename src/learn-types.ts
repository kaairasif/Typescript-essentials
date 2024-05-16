type Employee = {
    id: number;
    name: string;
    email: string;
    salary: number;
    address?: string;
}

const person: Employee = {
    id: 123,
    name: "Abc",
    email: 'a@a.com',
    salary: 10,
    address: "BD"
}

type Department = {
    name: string;
    employees: Employee[];
}

const sales: Department = {
    name: "sales",
    employees: [person]
}


// Union operator
type ISBN = number | string;

const book_a_isbn: ISBN = 123456789;

const book_b_isbn: ISBN = '12345678';


// Intersection operator
type Book = {
    title: string;
    pages: number;
    isbn: ISBN;
}

type Writer = {
    name: string;
    age: number;
    address: string;
}

type BookWriter = Book & Writer;


const bookAndWriter: BookWriter = {
    title: "Learning Javascript Book",
    pages: 12,
    isbn: 157453,
    name: "abc",
    age: 40,
    address: "B"
}

type startsWithLWS = `${string}LWS`;

const abcde: startsWithLWS = 'LWS'



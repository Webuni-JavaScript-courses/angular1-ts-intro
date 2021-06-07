// boolean
const isDone: boolean = true;

// number
const n: number = 5;

// string
let color = "blue";
color = 'red';
let myName: string = `Zizi`;
const templateString = `Hello, my name is ${myName}. I'll be ${1+5} years old next month`;

// array
const list1: number[] = [1, 2, 3];
const list2: Array<number> = [1, 2, 3];

// enum
enum Season {
    Winter,
    Spring,
    Summer,
    Fall
}

enum Color {
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue'
}

const s: Season = Season.Fall;
const c: Color = Color.Red;
console.log(s);
console.log(c);

// any
let notSure: any = 4;
notSure = 'String';
notSure = false;
// notSure.arbitraryFuncation();

// null es undefined
let u: undefined = undefined;
const n2: null = null;

// type inference
let s2 = 'alma';
s2 = s2.concat('fa');
console.log(s2);

const array = [0, 1, null, false]; // best common type
array.push(2);
// array.push('string');

let s3;
let array2 = [];

s3 = 's';
s3 = 5;

array2.push('4');
array2.push(4);


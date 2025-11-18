// !Problem one

type InputValue = string | number | boolean;

const formatValue = (Input: InputValue): InputValue => {
    if (typeof Input === 'string') {
        return Input.toUpperCase();
    } else if (typeof Input === 'number') {
        return Input * 10;
    } else {
        return !Input;
    }
};

// টেস্ট
// console.log( formatValue("hello")); // "HELLO"
// console.log( formatValue(5));       // 50
// console.log( formatValue(true));    // false



//! Problem-2


const getLength = (Value: string | any[]) => {
    if (typeof Value === 'string') {
        return Value.length;
    } else if (Array.isArray(Value)) {
        return Value.length;
    }


}

// console.log(getLength('kankon'));         // 6
// console.log(getLength([1, 2, 3, 45, 65]));   // 5


// ! Problem -3

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return (`Name: ${this.name} and Age : ${this.age}`)
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());



//! Problem - 4
// Problem - 4

// Correct type
type Item = {
    title: string;
    rating: number; // number between 0 and 5
};


const filterByRating = (items: Item[]): Item[] => {
    return items.filter(item => item.rating >= 4);
};

// Sample input
const books: Item[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

// console.log(filterByRating(books));


//! Problem-5


type users ={
    id : number ;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = ( users : users[]) : users[] =>{
return users.filter(users => users.isActive === true);
}
// input
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

// console.log(filterActiveUsers(users));

//! Problem - 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availabilty = book.isAvailable ? 'Yes' : 'No';

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilty}`
    );
}
// input
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

// printBookDetails(myBook);


//! problem - 7
function getUniqueValues(
  arr1: (number | string)[],
  arr2: (number | string)[]
): (number | string)[] {
  const unique: (number | string)[] = [];
  let count = 0; // 'push' er bodole index track korar jonno

  // prothom array loop
  for (let i = 0; i < arr1.length; i++) {
    let exists = false;
    for (let k = 0; k < count; k++) {
      if (arr1[i] === unique[k]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      // unique.push(arr1[i]) er bodole manual assignment
      unique[count] = arr1[i];
      count++;
    }
  }

  // ditiyo array loop
  for (let i = 0; i < arr2.length; i++) {
    let exists = false;
    for (let k = 0; k < count; k++) {
      if (arr2[i] === unique[k]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      // unique.push(arr2[i]) er bodole manual assignment
      unique[count] = arr2[i];
      count++;
    }
  }

  return unique;
}

// Test
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

console.log(getUniqueValues(array1, array2)); 
// Output: [1, 2, 3, 4, 5, 6, 7]
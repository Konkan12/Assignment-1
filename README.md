# TypeScript Problem Solving Assignment



## Instructions
1. সমস্ত solution `solution.ts` ফাইলে রয়েছে।  
2. প্রতিটি function-এর নাম ঠিক sample output অনুযায়ী রাখা হয়েছে।  
3. কোন extra console.log বা comment নেই।  
4. Output ঠিক sample output অনুযায়ী হবে।  
  

---

## Blog Post (Bangla)

### Blog-1: Differences between Interfaces and Types in TypeScript
TypeScript এ **interface** এবং **type alias** দুইটি শক্তিশালী ফিচার, যা ডেভেলপারদের টাইপ ডিফাইন করার জন্য ব্যবহৃত হয়। তবে এগুলোর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে।  

#### 1. Interface কি?
**Interface** হল একটি কাঠামো যা মূলত **object** এবং **class structure** define করতে ব্যবহৃত হয়।  

**উদাহরণ:**
```ts
interface Person {
  name: string;
  age: number;
}

এখানে Person অবজেক্টে name এবং age প্রপার্টি 
 
 Interface class এর মাধ্যমে implements করা যায়:
 EX:-
 interface Printable {
  print(): void;
}

class Document implements Printable {
  print() {
    console.log("Printing document...");
  }
}

### 1.Type Alias

Type alias হল একটি নতুন টাইপের নাম। এটি Object, Primitive, Union, Tuple সবকিছু define করতে পারে।
EX:-
type ID = string | number; // Union type
type Point = [number, number]; // Tuple

type Person = {
  name: string;
  age: number;
};
* Type alias খুব versatile,

* কিন্তু Interface এর মতো declaration merging করতে পারে না।


### Blog-2: Use of keyof Keyword in TypeScript

TypeScript এ keyof হল একটি শক্তিশালী keyword, যা ডেভেলপারদের object এর প্রপার্টি নামগুলো টাইপ হিসেবে ব্যবহার করতে সাহায্য করে। এটি type-safe কোড লেখার জন্য অত্যন্ত গুরুত্বপূর্ণ।

1. keyof কী?

keyof একটি type operator, যা একটি object type এর সব key এর union type তৈরি করে।

সাধারণভাবে:
যদি তোমার একটি object type থাকে, keyof তোমাকে তার সব প্রপার্টির নাম দিবে union type হিসেবে।

EX:-
interface Person {
  name: string;
  age: number;
  email: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const person: Person = { name: "Rakib", age: 16, email: "rakib@example.com" };

const name = getProperty(person, "name");  // "Rakib"
const age = getProperty(person, "age");    // 16

এখানে K extends keyof T ensures করছে যে key অবশ্যই object এর প্রপার্টি হতে হবে।

ফলে ভুল key দিলে TypeScript compile-time এ error দেখায়।

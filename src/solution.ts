type InputValue = string | number | boolean;

const formatValue = (input: InputValue): InputValue => {
    if (typeof input === 'string') {
        return input.toUpperCase();
    } else if (typeof input === 'number') {
        return input * 10;
    } else {
        return !input;
    }
};







const getLength = (input: string | any[]): number => {
    if (typeof input === 'string') {
        return input.length;
    } else if (Array.isArray(input)) {
        return input.length;
    } else {
        return 0;
    }
};







class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}






type Item = {
    title: string;
    rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
    return items.filter(item => item.rating >= 4);
};






type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
};







interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
};







const getUniqueValues = (arr1: number[] | string[], arr2: number[] | string[]): (number | string)[] => {
    const unique: (number | string)[] = [];
    const combined = [...arr1, ...arr2];
    for (let i = 0; i < combined.length; i++) {
        if (!unique.includes(combined[i])) {
            unique.push(combined[i]);
        }
    }
    return unique;
};






type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
    return products.reduce((total, product) => {
        const price = product.price * product.quantity;
        const discountedPrice = product.discount ? price * (1 - product.discount / 100) : price;
        return total + discountedPrice;
    }, 0);
};

//alert("Holaabstraccion");
class Book{
    constructor(title, author, price){
        this._title = title;
        this._author = author;
        this._price = price;
    }
    
}

const book1 = new Book('1984', 'G.O', 350);
const book2 = new Book('100 años de soleddad', 'Gabo', 360);

console.log(book1._title);
console.log(book1._author);
console.log(book1._price);

console.log(book2._title);
console.log(book2._author);
console.log(book2._price);

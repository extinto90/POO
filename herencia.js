//alert("herencia.js");
const _private = new WeakMap();
class Book{
    constructor(title, author, price){

        const properties = {
            _title: title,
            _author: author,
            _price: price
        }
        _private.set(this, {properties});
    }

        get title() {
            return _private.get(this).properties['_title'];
        }

        set title(newTitle) {
            return _private.get(this).properties['_title'] = newTitle;
        }

        get author() {
            return _private.get(this).properties['_author'];
        }
    
        set author(newAuthor) {
            return _private.get(this).properties['_author'] = newAuthor;
        }
 
        //ASI SE EIMPLEMENTAN LOS GETTER Y SETTER PARA IGRESAR 
        //DESDE AFUERAA NUESTRA CLASE
}

class Comic extends Book {
    constructor(name, author, price, ilustrators){
        super(name, author, price);
        this.ilustrators = ilustrators;
    }

    addIlustrator(newIlustrator = []){
        this.ilustrators.push(newIlustrator)
    }
    
}

const book1 = new Book('1984', 'G.O', 350);

const comic1 = new Comic('Naraturo', 'A.M', 35, ['N.J', 'k.l']);

book1.title = 'El principito';

console.log(book1.title);
//console.log(book1._author);
//console.log(book1._price);

console.log(comic1);
console.log(comic1.title);
console.log(comic1.ilustrators);

comic1.addIlustrator('A.W');

console.log(comic1.ilustrators);
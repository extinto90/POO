//alert("encapsulacion.js");
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
 
        //ASI SE EIMPLEMENTAN LOS GETTER Y SETTER PARA IGRESAR 
        //DESDE AFUERAA NUESTRA CLASE
}

const book1 = new Book('1984', 'G.O', 350);

book1.title = 'El principito';

console.log(book1.title);
//console.log(book1._author);
//console.log(book1._price);


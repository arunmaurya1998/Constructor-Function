function Author(name, birthYear, nationality){
this.name;
this.birthYear;
this.nationality;
}

let Author1 = new Author(kamlKant, 1997, indian)
let Author2 = new Author(pallwiDas, 1995, indian)

console.log(Author1)
console.log(Author2)




function Book(Author, genre, price){

    this.Author = Author;
    this.genre = genre;
    this.price = price;

}

let Book1 = new Book(kamlKant, ekKhani, 208)
let Book2 = new Book(I, apnaSapna, 358)

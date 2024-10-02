//TASK 1:
//The class Movie is stated below. An instance of class Movie represents a film.
// This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
//a String representing the studio, and a String representing the rating as its arguments, and sets the 
//respective class properties to these values.

class Movies{
    constructor(title,studio,rating){
     this.title=title;
     this.studio=studio;
     this.rating=rating;
    }
}
const property=new Movies("Jailer","Sun pictures","7.1");
console.log(property.title,property.studio,property.rating);

//b) The constructor for the class Movie will set the class property rating 
//to "PG" as default when no rating is provided.

class Movie1{
    constructor(title,studio,rating="PG"){
     this.title=title;
     this.studio=studio;
     this.rating=rating;
    }
}
const property1=new Movie1("Jailer","Sun pictures",);
console.log(property1.title,property1.studio,property1.rating);

//c) Write a method getPG, which takes an array of base type Movie as its argument, 
//and returns a new array of only those movies in the input array with a rating of "PG". 
//You may assume the input array is full of Movie instances. The returned array need not be full.

class Movies1{
  constructor(title,studio,rating="PG"){
   this.title=title;
   this.studio=studio;
   this.rating=rating;
  }
  }
const property2=[new Movies1("Jailer","Sun pictures","7.1"),new Movies1("vikram","raj kamal"),
new Movies1("leo","seven screen","7.2"),new Movies1("jeo","vision cinema house")]
const result=property2.filter((ele)=>ele!==this.rating)
console.log(result)

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//the studio “Eon Productions”, and the rating “PG­13”

class Movie{
    constructor(title,studio,rating){
      this.title=title;
      this.studio=studio;
      this.rating=rating;
    }
}
const Production=new Movie("Casino Royale","Eon Productions","PG13");
console.log(Production.title,Production.studio,Production.rating);

//TASK 2:-
//Convert the UML diagram to Typescript class. - use number for double
class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get Radius() {
      return this.radius;
    }
    set Radius(n) {
      this.radius = n;
    }
    get Color() {
      return this.color;
    }
    set Color(c) {
      this.color = c;
    }
    get toString() {
      return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }
    get Area() {
      return Math.PI * Math.pow(this.radius, 2);
    }
    get Circumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  let Circle1 = new Circle(1.0, "red");
  console.log(Circle1.radius);
  console.log(Circle1.color,Circle1.radius);
  console.log(Circle1.Radius);
  console.log(Circle1.Color);
  console.log(Circle1.toString);
  console.log(Circle1.Area);
  console.log(Circle1.Circumference);
  

//TASK 3:-
//Write a “person” class to hold all the details.

class Person{
    constructor(name,age,gender,maritalstatus,contact,email){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.maritalstatus=maritalstatus;
    this.contact=contact;
    this.email=email;
    }
}
const data=new Person("ajith","20","male","single",9876543210,"example@gmail.com");
console.log(data.name,data.age,data.gender,data.maritalstatus,data.contact,data.email);

//TASK 4:-
//write a class to calculate the Uber price.

class Uberprice{
  constructor(kilometer,price){
    this.kilometer=kilometer
    this.price=price
  }
  set Price(n){
    this.price=n
  }
  get Price(){
    return this.price*this.kilometer
  }
}
let Uber=new Uberprice(1,50)
console.log(Uber.kilometer,Uber.price);
Uber.kilometer=20
console.log(Uber.Price);



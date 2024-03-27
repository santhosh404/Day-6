/* Task 1: Class Movie 

   The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

    title, which is a String representing the title of the movie
    studio, which is a String representing the studio that made the movie
    rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

    a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
    b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
    c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
    d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

*/


class Movie {
    
    //a) constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
    
    constructor(title, studio, rating="PG") { // b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    // c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
    getPG(movies) {
        const pgMovies = movies.filter(m => m.rating === "PG");
        return pgMovies;
    }
}

//Array that consists of all Movie objects
const movies = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("Finding Nemo", "Pixar", "PG"),
    new Movie("The Matrix", "Warner Bros.", "R"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("The Lion King", "Disney", "PG")
]

const pgMovies = new Movie();

//calling the getPG function and printing the results
pgMovies.getPG(movies).forEach(d => {
    console.log(`The movie ${d.title}, which built in the studio ${d.studio} has the rating of ${d.rating}`)
})

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const movie = new Movie("Casino Royale", "Eon Productions", "PG13");
console.log(`Newly created movie instance has Title: ${movie.title}, Studio: ${movie.studio} and Rating: ${movie.rating}`);






// Task 2: class circle


class Circle {
    constructor(radius=1.0, color="red") {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {}
    
    getArea() {
        const area = ((Math.PI) * (this.radius ** 2)).toFixed(2);
        return area;
    }

    getCircumference() {
        const circumference = (2 * (Math.PI) * this.radius).toFixed(2);
        return circumference;
    }
}

// Creating the instance of Circle class without passing the properties
const circleWithoutPassingProperties = new Circle();
console.log(`Object without passing any properties, Radius: ${circleWithoutPassingProperties.radius}, Color: ${circleWithoutPassingProperties.color}`);

// Creating the instance of Circle class by passing only radius property
const circleByPassingRadius = new Circle(2.5);
console.log(`Oject by passing only radius property as 2.5, Radius: ${circleByPassingRadius.radius}, Color: ${circleByPassingRadius.color}`);

// Creating the instance of Circle class by passing both radius and color property
const circleByPassingRadiusAndColor = new Circle(4.5, "blue");
console.log(`Oject by passing both radius and color property as 4.5 and blue, Radius: ${circleByPassingRadiusAndColor.radius}, Color: ${circleByPassingRadiusAndColor.color}`);

// Creating the instance of Circle class for getting and setting the values
const circleGetterSetter = new Circle(5.5, "green");

// Getting the radius
const radius = circleGetterSetter.getRadius();
console.log(`Radius: ${radius}`);

// Setting the radius and printing the setted radius
circleGetterSetter.setRadius(10.5);
console.log(`New Radius = ${circleGetterSetter.getRadius()}`);

// Getting the color
const color = circleGetterSetter.getColor();
console.log(`Color: ${color}`);

// Setting the radius and printing the setted radius
circleGetterSetter.setColor("gray");
console.log(`New Color = ${circleGetterSetter.getColor()}`);

// Area of circle
const area = circleGetterSetter.getArea();
console.log(`Area of circle with radius: ${circleGetterSetter.getRadius()} = ${area}`);

// Circumference of circle
const circumference = circleGetterSetter.getCircumference();
console.log(`Circumference of circle with radius: ${circleGetterSetter.getRadius()} = ${circumference}`);





//Task 3: Write a “person” class to hold all the details

class Person {
    constructor(name, gender, bloodGroup, mobileNumber, address) {
        this.name = name;
        this.gender = gender;
        this.bloodGroup = bloodGroup;
        this.mobileNumber = mobileNumber;
        this.address = address;
    }
}

const person = new Person("Santhosh Annamalai", "Male", "O+ve", "8487564432", "No. 20, Gandhi Street, Gandhi Nagar, Gandhipuram, Chennai-600034")
console.log(`Name: ${person.name}, Gender: ${person.gender}, Blood Group: ${person.bloodGroup}, Mobile Number: ${person.mobileNumber}, Address: ${person.address}`);
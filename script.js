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

console.log(`
Task 1:

`)

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

    get Radius() {
        return this.radius;
    }

    set Radius(radius) {
        this.radius = radius;
    }

    get Color() {
        return this.color;
    }

    set Color(color) {
        this.color = color;
    }

    toString() {
        return `"Circle[radius = ${this.radius}, color = ${this.color}]"`;
    }
    
    get Area() {
        const area = ((Math.PI) * (Math.pow(this.radius, 2))).toFixed(2);
        return area;
    }

    get Circumference() {
        const circumference = (2 * (Math.PI) * this.radius).toFixed(2);
        return circumference;
    }
}

console.log(`
Task 2:

`)

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
const radius = circleGetterSetter.Radius;
console.log(`Radius: ${radius}`);

// Setting the radius and printing the setted radius
circleGetterSetter.Radius = 10.5;
console.log(`New Radius = ${circleGetterSetter.Radius}`);

// Getting the color
const color = circleGetterSetter.Color;
console.log(`Color: ${color}`);

// Setting the radius and printing the setted radius
circleGetterSetter.Color = "gray";
console.log(`New Color = ${circleGetterSetter.Color}`);

// Area of circle
const area = circleGetterSetter.Area;
console.log(`Area of circle with radius: ${circleGetterSetter.Radius} = ${area}`);

// Circumference of circle
const circumference = circleGetterSetter.Circumference;
console.log(`Circumference of circle with radius: ${circleGetterSetter.Radius} = ${circumference}`);

//toString 
console.log(circleGetterSetter.toString());




//Task 3: Write a “person” class to hold all the details

class Person {
    constructor(name, gender, bloodGroup, email, mobileNumber, martialStatus, address) {
        this.name = name;
        this.gender = gender;
        this.bloodGroup = bloodGroup;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.martialStatus = martialStatus;
        this.address = address;
    }
}

const person = new Person("Santhosh Annamalai", "Male", "O+ve", "santhosh@gmail.com", "8487564432", "single", "No. 20, Gandhi Street, Gandhi Nagar, Gandhipuram, Chennai-600034")
console.log(`
    Task 3:

    User Details:
    
    **********************************************
    Name: ${person.name}
    Gender: ${person.gender}
    Blood Group: ${person.bloodGroup}
    Email: ${person.email}
    Mobile Number: ${person.mobileNumber}
    Marital Status: ${person.martialStatus}
    Address: ${person.address}
    
`);



//Task 4: Write a class to calculate the Uber price

class Uber {
    constructor(customerName, customerPhoneNumber, fromLocation, toLocation, distance, farePerKm=14, baseFare, driverFee=300, totalFare) {
        this.customerName = customerName;
        this.customerPhoneNumber = customerPhoneNumber;
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
        this.farePerKm = farePerKm;
        this.baseFare = baseFare;
        this.driverFee = driverFee;
        this.totalFare = totalFare;
    }

    get totalDistance() {

        //Usually we use some api eg.google api to calculate distance, by taking from and to location. Here I'm assuming random number as distance.
        this.distance =  Math.floor(Math.random() * (500 - 1 + 1)) + 1
        return this.distance;
    }

    get baseF() {
        this.baseFare = this.distance * this.farePerKm;
        return this.baseFare;
    }

    get totalF() {
        this.totalFare = this.baseFare + this.driverFee;
        return this.totalFare;
    }
}

const getEstimatedFare = new Uber("Santhosh", "+91 9361206901", "Chennai, Tamil Nadu, India", "Tiruvannamalai, Tamil Nadu, India");
console.log(`
    Task 4: 

    Customer name: ${getEstimatedFare.customerName}
    Customer contact number: ${getEstimatedFare.customerPhoneNumber}
    From location: ${getEstimatedFare.fromLocation}
    To location: ${getEstimatedFare.toLocation}
    Fare per km: ₹ ${getEstimatedFare.farePerKm}
    Total km: ${getEstimatedFare.totalDistance} km

    **********************************************
    Base Fare: ₹ ${getEstimatedFare.baseF}
    Driver Fee: ₹ ${getEstimatedFare.driverFee}
    Total Estimated Fare: ₹ ${getEstimatedFare.totalF}

    Note: Fare may vary after the complition of ride, due to other charges like toll etc..

`)

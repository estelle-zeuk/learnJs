/*var name ="estelle";
 
alert(name);

if(true){
    let name = "zeukeng";

    name = "nguion"

    alert(name);
}
alert(name);*/

/* let fname = 'estelle';
let lname = 'zeukeng';
let age = prompt('how old are you ?');

let result = `${fname} ${lname} is ${age} year(s) old`;
alert(result);*/


/*function welcome(user='estelle', message='you are welcome here'){
    alert(`${user}, ${message}`);
}

welcome('zeukeng', 'how are you doing?');
welcome();*/

/*
let createBlog = (title, body) => {
    if(!title){
        throw new Error('The title is required');
    }
    if(!body){
        throw new Error('Body cannot be empty');
    }
    return alert(`${title} - ${body}`);
}

createBlog('Jesus is Lord', 'His resurrection is an undeniable truth. You have to believe in Him to be saved');
*/

/*let thingsToDo = {
    morning: "exercises",
    afternoon: "work",
    evening: "code",
    night: ["sleep", "dream"]
}

let {morning, afternoon} = thingsToDo;

console.log(morning, '-', afternoon); */

/*let uniStudent = student => {
    let { name, university } = student;
    console.log(`${name} from ${university}`);
};

uniStudent({
    name: 'estelle',
    university: 'supptic'
});*/

/*var day = {
    breakfast: 'toast with milk',
    lunch: 'rice with chicken curry'
}

var night = {
    dinner: 'noodle soup'
}

var picnic = {...day, ...night};

console.log(picnic);*/


/*function Holiday(destination, days){
    this.destination = destination;
    this.days = days;
}

Holiday.prototype.info = function(){
    console.log(this.destination + ' | ' + this.days + ' days');
};

var nepal = new Holiday('Nepal', 30);
console.log(nepal.info());*/


class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }
    
    info(){
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

/*const trip = new Holiday('Seychelles - mariage', 14);
console.log(trip.info());*/

class Expedition extends Holiday{
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }
    
    info(){
        super.info();
        console.log(`Bring your ${this.gear.join(' - ')}`);
    }
}

const tripGear = new Expedition("Seychelles", 21, ['sunglasses', 'hat']);
tripGear.info();
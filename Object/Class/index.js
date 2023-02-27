//basic classes
class Rectangle {
    //setup Object
    constructor(w,h,c){
        this.width = w
        this.height = h
        this.color = c
    }
    getArea(){
        return this.width * this.height
    }
    printDescription(){
        console.log('i am a rectangle of '+ this.width+ ' ' +this.height
        )
    }
}

let myRectangle1 =  new Rectangle( 5,3,'cyan')
// console.log(myRectangle1.getArea());

//getter and setter

class Square{
    constructor(width, color){
        this.width = width;
        this.height = width;
        this.color = color;
        this.requestArea = 0
    }
    get area(){
        this.requestArea++
        return this.width * this.height;
    }
    set area(area){
        if(!area){
        this.width = Math.sqrt(area)
        this.height = this.width}

    }
}
let square1 = new Square(25,'blue')
// square1.area = 25
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.area)
// console.log(square1.requestArea)
// console.log(square1.width)
// console.log(square1.height)

//static

class Box{
    constructor(_width){
        this.width = _width
        this.height = _width
    }
    static equals(a, b){
        return a.width + a.height === b.width + b.height
    }
    static isValidStatic(width, height){
        return width === height
    }
}

let box1 = new Box(2)
let box2 = new Box(3)

// console.log(box1)
// console.log(Box.equals(box1, box2))
// console.log(Box.isValidStatic(2, 3))



// inheritance and extends 

class Person{
    constructor(age, name){
        this.age = age
        this.name = name
    }
    described(){
        console.log(`I am ${this.name} and i am ${this.age} years old`)
    }
}

class Programmer extends Person{
    constructor(name, age, yearsOfExp){
        super(name, age)//calling the Person name and age value
    //custom behavior of the programmed
    this.yearsOfExp = yearsOfExp
    }

    yrsExp(){
        console.log(`i ${this.name} has experience of ${this.yearsOfExp} years of programming`)
    }
    code(){
        console.log(`${this.name} is coding`)
    }
    
}

let person1 = new Person(26, 'Joshua')
let programmer1 = new Programmer(27, 'jospert', 1)

// person1.described()
// programmer1.described()
// programmer1.yrsExp()


const programmer = [
    new Programmer(45, 'pol', 12),
    new Programmer( 31, 'lov', 10)
]

function developSoftware(programmers){
    for(let programmer of programmers){
        programmer.code()
    }
}

// developSoftware(programmer)

//polymorphism

class Animal {
    constructor(name){
        this.name = name
    }
    makeSound(){
        console.log('generic animal sound')
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }

    // overriding method from the parent class
    makeSound(){
        super.makeSound()
        console.log('Woof my name is '+ this.name)
    }

}

const a1 = new Animal('Donkey')
const a2 = new Dog('Tiburcio')
// a1.makeSound()
// a2.makeSound()

const myList = document.getElementById('myList')

class ListBinding{
    constructor(element){
        this.listElement = element
        this.textList = [
            'decode',
            'is',
            'note bad'
        ]
    }

    static createListItem(text){
        const li  = document.createElement('li')
        li.textContent = text
        return li
    }
    update(){
        //remove all existing <li> element/tags </li>
        while(this.listElement.firstChild){
            this.listElement.removeChild(this.listElement.firstChild)
        }
        //fill it with new item
        for(const list of this.textList){
            this.listElement.appendChild(ListBinding.createListItem(list))
        }
    }
}
const list1 = new ListBinding(myList)

list1.update()
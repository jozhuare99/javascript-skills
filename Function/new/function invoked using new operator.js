function Person(name, age){
  this.name = name
  this.age = age
}

Person.prototype.sayHello = function(){
  console.log("Hello, my name is " + this.name)
}

const john = new Person("John", 25)

john.sayHello(); //Hello, my name is John
//Object
const circle = {
    radius: 1,
    location: {
        x:1,y:1
    },
    draw: function(){console.log('draw');}
}

circle.draw()

//factory function
function createCircle(radius){
    let obj =  {
        radius: radius,
        draw: function(){console.log('draw')}
        }  
    return obj
   
}

const circles = createCircle(1)
 
//constructor function
function Circle(radius){
    let defaultLocation = { x: 0, y: 0}
    this.radius = radius
    this.draw = function(){
        console.log('draw');
    }
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){
            return defaultLocation;
        },
        set: function(value){
            if(!value.x || !value.y)
            throw new Error('invalid location')
            defaultLocation = value
        }
    })
}

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
`)

const cc = new Circle1()

const another = new Circle(1)

for(let key in cc){
    if(typeof cc[key] !== 'function')
    console.log(key, circle[key])
}

console.log(Object.keys(cc))

//abstraction
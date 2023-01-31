const friends = [
    {
        name: "Anna",
        books: ['Bible', 'Harry potert'],
        age: 21,
    },
    {
        name: "bob",
        books: ['War and Piaece', 'Romeo and Juliet'],
        age: 26,
    },
    {
        name: "Alice",
        books: ['The Lord', 'The SHining'],
        age: 18,
    },
]

const allBooks = friends.reduce(
    (accumulator, current)=>{
      return [...accumulator, ...current.books]  
    }, 
    []
)

console.log(allBooks);
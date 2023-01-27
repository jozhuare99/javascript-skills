{
    <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  </ul>
}

// how to render list that is not using copy and pasting
// solution 1.
let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];
{
    <ul>
    {items.map((item,index)=>{
        return <li key={index}>{item}</li>
    })}
</ul>
}

//solution 2
let itemList = items.map((item,index)=>{
    return <li key={index}>{item}</li>
  })

  {
    <ul>
    {itemList}
  </ul>
  }

//solution 3
let itemLists = [];
items.forEach((item,index)=>{
  itemList.push( <li key={index}>{item}</li>)
})

{
<ul>
    {itemList}
</ul>
}

// Data from the back end or from data base
const [userData,setUserData]=useState([])
useEffect(()=>{
	axios.get('https://reqres.in/api/users?page=2')
      .then(res=>{
        console.log(res.data.data);
        setUserData(res.data.data)
      })
      .catch(err=>{
        console.log(err);
      })
    
  },[])

  const users=userData.map((data,id)=>{
    return <div key={id}>
      <h2>{data.first_name} {data.last_name}</h2>
      <p>{data.email}</p>
    </div>
  })

  {users}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Row from'./Components/Row'

function App() {
  const [friends,setFriends] =useState([
    {
      id: 1,
      name: "Rahul",
      age: 21,
      city: "Hyderabad",
      hobby: "Cricket"
    },
    {
      id: 2,
      name: "Sneha",
      age: 20,
      city: "Bangalore",
      hobby: "Painting"
    },
    {
      id: 3,
      name: "Kiran",
      age: 22,
      city: "Chennai",
      hobby: "Gaming"
    },
    {
      id: 4,
      name: "Anjali",
      age: 19,
      city: "Mumbai",
      hobby: "Dancing"
    },
    {
      id: 5,
      name: "Arjun",
      age: 23,
      city: "Pune",
      hobby: "Football"
    },
    {
      id: 6,
      name: "Divya",
      age: 20,
      city: "Delhi",
      hobby: "Reading"
    },
    {
      id: 7,
      name: "Varun",
      age: 21,
      city: "Kolkata",
      hobby: "Photography"
    },
    {
      id: 8,
      name: "Meghana",
      age: 22,
      city: "Vizag",
      hobby: "Music"
    },
    {
      id: 9,
      name: "Suresh",
      age: 24,
      city: "Warangal",
      hobby: "Traveling"
    },
    {
      id: 10,
      name: "Priya",
      age: 20,
      city: "Mysore",
      hobby: "Cooking"
    },
    {
      id: 11,
      name: "Nikhil",
      age: 23,
      city: "Goa",
      hobby: "Swimming"
    },
    {
      id: 12,
      name: "Keerthi",
      age: 21,
      city: "Nagpur",
      hobby: "Singing"
    },
    {
      id: 13,
      name: "Rohit",
      age: 22,
      city: "Jaipur",
      hobby: "Cycling"
    },
    {
      id: 14,
      name: "Pooja",
      age: 19,
      city: "Surat",
      hobby: "Drawing"
    },
    {
      id: 15,
      name: "Ajay",
      age: 25,
      city: "Bhopal",
      hobby: "Gym"
    },
    {
      id: 16,
      name: "Lavanya",
      age: 20,
      city: "Vijayawada",
      hobby: "Writing"
    },
    {
      id: 17,
      name: "Teja",
      age: 21,
      city: "Guntur",
      hobby: "Movies"
    },
    {
      id: 18,
      name: "Harsha",
      age: 23,
      city: "Tirupati",
      hobby: "Coding"
    },
    {
      id: 19,
      name: "Sai",
      age: 22,
      city: "Nellore",
      hobby: "Badminton"
    },
    {
      id: 20,
      name: "Bhavana",
      age: 21,
      city: "Karimnagar",
      hobby: "Shopping"
    }
  ]);

// without props
// function change(ind){
//     let newArr=friends.filter((item,idx)=>idx!==ind)
//     setFriends(newArr);
//   }

function deleteItem(id){
  let newArr=friends.filter((item)=>{
    if(item.id==id)
      return false
    return true
  })
setFriends(newArr);
}

// with props
let result=friends.map((item,ind)=>{
  return(
  <Row id={item.id} name={item.name} age={item.age} city={item.city} hobby={item.hobby} deleteItem={deleteItem} key={item.id}/>
  )
})

  return (
   <div>
    <table border="6px">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Hobby</th>
            <th>Action</th>
        </tr>
      </thead>

      {/* <tbody>
      {friends.map((item, ind) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.city}</td>
              <td>{item.hobby}</td>
              <td>
                <button onClick={() => change(ind)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </tbody> */}

      <tbody>
      {result}
      </tbody>

    </table>

   </div>
  )
}

export default App

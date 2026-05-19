import React from 'react'

function Row({id,name,age,city,hobby,deleteItem}) {
  return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{city}</td>
        <td>{hobby}</td>
        <td><button onClick={()=>{deleteItem(id)}}>delete</button></td>
    </tr>
  
  )
}

export default Row
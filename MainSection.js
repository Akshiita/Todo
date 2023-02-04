import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'

const list  =[ 
  {number:1,title:"Workout",date:new Date("02/4/2023")},
  {number:2,title:"React Assignment", date:new Date("02/4/2023")}, 
  {number:3,title:"Healthy food",date : new Date("02/04/2023")},
  
]

export default function MainSection(props) {
  const [filteredList,setFilteredlist] = useState(list)
  const addToList =(obj)=>{
    list.push(obj)
    setFilteredlist(list)
  }
  return (
    <div className='main-section'>
      {props.active === "INBOX" && (
        <Inbox list={filteredList} append={addToList}/>
      )}
      {props.active === "TODAY" && <Today list={filteredList}/>}
      {props.active === "NEXT" && <Next7Days list={filteredList}/>}
      
    </div>
  )
}
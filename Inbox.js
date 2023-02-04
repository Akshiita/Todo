import React, { useRef, useState } from 'react'

export default function Inbox(props) {
  const [newTask,setNewTask] = useState(false)
  const titleRef = useRef()
  const calendarRef = useRef()
  const newtaskHandler=()=>{
    setNewTask(true)
  }
  const addHandler=(e)=>{
    e.preventDefault()
    if(titleRef.current.value === ""){
      window.alert("Task Can Not be empty");
      return;
    }
    const newObj = {
      number: props.list.length+1,
      title: titleRef.current.value,
      date : new Date(calendarRef.current.value)
    }
    props.append(newObj)
    setNewTask(false)
  }
  const cancelHandler=()=>{
    setNewTask(false)
  }
  return (
    <div>
     <h3>INBOX</h3>
     {!newTask && (
      <button type="button" className ="btn btn-outline-dark"  onClick={newtaskHandler}>+Add New</button>
     )}
     {newTask && (
      <form className='newtask-box'>
        <input type="text" ref={titleRef}/>
		
        <div className="buttons">
          <button className='btn btn-dark' onClick={addHandler}>Add Task</button>
		  &nbsp;&nbsp;&nbsp;
          <button className="btn btn-dark" onClick={cancelHandler}>Cancel</button>
		  &nbsp;&nbsp;&nbsp;
          <input type="date" ref={calendarRef} defaultValue="2023-02-04" style={{backgroundColor:"#f2dcf2"}}/>
        </div>
      </form>
     )}
     <div>
      {props.list.map((list)=>{
        return (
          <div className="box" key={list.number}>
            {list.title} ({list.date.toLocaleDateString()})
          </div>
        )
      })}
     </div>
    </div>
  )
}

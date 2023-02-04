import React from 'react'
import './SideNav.css'
export default function SideNav(props) {
  return (
    <div className="dropdown">
  <a className="btn btn-light dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{margin:'10%',backgroundColor:'#eacef0'}}>
    Check Here
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <li   onClick={()=>{props.change("INBOX")}} >
      <div>INBOX</div>
     </li>
     <li  onClick={()=>{props.change("TODAY")}} >
        <div> TODAY</div>
        
        </li>
        <li  onClick={()=>{props.change("NEXT")}} >
           <div >NEXT 7 DAYS</div>
           </li>
      </ul>
</div>
  

  )
}
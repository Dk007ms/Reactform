import React from 'react'

export default function Textinput(props) {
    
    let heading=props.heading;
    let type=props.type;
  return (
    <div>
      <label htmlFor={props.heading} className="w-10">{heading}</label>
      <input id={props.heading} type={type} className="border-2 border-black" name={props.name}/>
    </div>
  )
}

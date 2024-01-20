import React from 'react'

export default function Textinput(props) {
    
    let heading=props.heading;
    let type=props.type;
    let changehandler=props.changehandler;
    let value=props.value;
  return (
    <div>
      <label htmlFor={props.heading} className="w-10">
      <input id={props.heading} type={type} className="border-2 border-black" name={props.name} onChange={changehandler} value={value}/>
      {heading}
      </label>
    </div>
  )
}

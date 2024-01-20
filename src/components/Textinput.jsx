import React from 'react'

export default function Textinput(props) {
    
    let heading=props.heading;
    let type=props.type;
    let changehandler=props.changehandler;
    let value=props.value;
  return (
    <div className='flex flex-wrap flex-col w-auto'>
      <label htmlFor={props.heading} className="">{heading}</label>
      <input id={props.heading} type={type} className="border-2 border-black w-auto" name={props.name} onChange={changehandler} value={value}/>
    </div>
  )
}

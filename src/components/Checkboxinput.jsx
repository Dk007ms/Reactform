import React from 'react'

export default function Checkboxinput(props) {
    let heading=props.heading;
    let type=props.type;
    let description=props.description;
    let checked=props.checked;
    let changehandler=props.changehandler;
  return (
    <div>
      <label htmlFor={heading} className=''>
        <input id={heading} type={type} className='border-2 border-black' name={props.name} onChange={changehandler} checked={checked}/>
        <div>
           <h1 className='text-lg font-semibold' >{heading}</h1>
            <p className=" opacity-60">{description}</p>
        </div>
      </label>
    </div>
  )
}

import React from 'react'

export default function Checkboxinput(props) {
    let heading=props.heading;
    let type=props.type;
    let description=props.description;
  return (
    <div>
      <label htmlFor={heading} className=''>
        <input id={heading} type={type} className='border-2 border-black' name={props.name}/>
        <div>
            {heading}
            <p className="">{description}</p>
        </div>
      </label>
    </div>
  )
}

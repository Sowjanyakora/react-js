import React,{useEffect,useRef,useState} from 'react'

function Useref() {
    const ele=Useref(0)
    const[x,setx]=useState(0)
    useEffect(
        ()=>{ele.current.value=x},[x]
    )
  return (
    <div>
        <input type="text" ref={ele}></input>
        <button onClick={()=>setx(x+1)}>click</button>
    </div>
  )
}

export default Useref

import React from 'react'
const context=crateContext()
function Usecontext() {
    const name="Rocky"
    return<>
    <h1>This Hookdemo1</h1>
    <Hooksdemo name="rocky"></Hooksdemo>
    </>
    function Usecontext(props)
    {
        return<>
        <h1>This Hooksdemo2</h1>
        <Hookdemo2 name={props.name}></Hookdemo2>
        </>
    }
    function Usecontext(props)
    {
        return<>
        <h1>This Hookdemmo3</h1>
        <Hooksdemo2 name={props.name}></Hooksdemo2>
        </>
    }
  return (
    <div>
      
    </div>
  )
}

export default Usecontext

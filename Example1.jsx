import React from 'react';
class Example1 extends React.Component{
    constructor()
    {
        super()
        this.name='Rocky'
        this.state={name:"Rocky",age:15}
    }
    render()
    {
        return <>
        <h1>name:{this.state.name}</h1>
        <h2> age:{this.state.age}</h2>
        <button onClick={()=>this.setState({age:this.state.age+1})}>click</button>
        </>
    }
}
export default Example1
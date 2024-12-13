import React,{component}from 'react'
export class Example3 extends components
{
    components()
    {
        super()
        this.state={name:"",age:0}
        this.count=0
    }
    chaneName=(e)=>{
        this.setState({name:e.target.value})
    }
    changeAge=(e)=>{
        this.setSte({age:e.target.value})
    }
    render(){
        return(
            <div>
                <div>Name:<input type='text'onChange={this.changeName}></input></div>
                <div>Age:<input type='number'onChange={this.changeAge}></input></div>
                <button onClick={changeState}>click</button>
                name:{this.state.name}<br/>
                age:{this.state.age}<br/>{count}
            </div>
        )
    }
}
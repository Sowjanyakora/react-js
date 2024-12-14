
import './App.css';
import Example from './Sample/Example';
import Example2 from './Sample/Example2';
import Example1 from './Sample/Example1';
import Example3 from './Sample/Example3';
import Hooksdemo from './Sample/Hooksdemo';
function App() {
  const x=31
  const a=[10, 20, 'abc']
  const s={
    name:"Sowji",
    age:20
  }
  //arrow function
  const arrow=()=>{
    return<> <h1>name:{s.name}</h1>
    <h2>age:{s.age}</h2></>
  }
  return (
    <div><h1>Hello World</h1>
    <p>I amfrom sasi</p>
       <Example/>
       <Example2/>
       
       {x}<br/>
      {a.map((ele)=> ele+" ")}<br/>
      {s.name} {s.age}
      {arrow()}
      <Example1/>
      <Hooksdemo/>
      <Example3/>
    </div>
  );
}
export default App;


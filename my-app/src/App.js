import{useState,useEffect} from "react";

function App() {
  const [number,setNumber]=useState(0);
  const [name,setName]=useState("Mehmet");
  useEffect(()=>{
    console.log("component state edildi.")
  },[]);
  useEffect(()=>{
    console.log("number ve name state güncellendi.")
  },[number,name]);
  return (
    <div className="App">
      <h1>{number}</h1>
      <button onClick={()=>setNumber(number +1)}>Click</button>
      <hr/>
      <h1>{name}</h1>
      <button onClick={()=>setName("Mete")}>Click</button>
    </div>
  );
}

export default App;

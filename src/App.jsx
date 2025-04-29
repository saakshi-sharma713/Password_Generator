import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { useEffect,useRef } from 'react';

function App() {
  const [len, setlen] = useState(8);
  const[num,setnum]=useState(false);
  const[ch,setch]=useState(false);
const[pass,setpass]=useState(" ");
// Use-callback hook
const passwordGenerator = useCallback(()=>{
let pass =" ";
let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
if(num) str+="0123456789"
if(ch) str+="!@#$%^&*()<>?"
for(let i=0; i<len; i++){
  let ind = Math.floor(Math.random() * str.length);
  pass +=str.charAt(ind);
  
  
}

setpass(pass);

},[len,num,ch,setpass])

//Use-effect hook
useEffect(()=>{
  passwordGenerator();
},[len,num,ch,passwordGenerator])

//Use ref
const passwordRef=useRef(null);

// copy text function
function copyText(){
  passwordRef.current?.select();

  window.navigator.clipboard.writeText(pass);
  
}


  return (
    <>
    
     <div className="box">
      <div className='child'>
        <input type="text" class="text" value={pass}   ref={passwordRef}></input>
        <button
        onClick={()=>{
          copyText();
        }}>Copy</button>
        </div>
        <div className='child2'>
          <input type="range" className="range" min={6} max={100} value={len}
          onChange={(e)=>{
            setlen(e.target.value)
          }}></input>
        <label>length:{len}</label>

    <div><input type="checkbox" onChange={()=>{
          setnum((prev)=> !prev);
        }}></input>
        <label>Number</label></div>
    <div><input type="checkbox" onChange={()=>{
          setch((prev)=> !prev);
        }}></input>
        <label>chracter</label>
        </div>
        </div>
     </div>
    </>
  )
}

export default App;

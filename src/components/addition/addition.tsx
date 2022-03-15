import { useState } from 'react';
import './addition.css';

export function Addition(){

    const [num0, setNum0] = useState(0);
    const [num1, setNum1] = useState(0);

    const [result, setResult] = useState(0);

    function handleChange0(e:any){
        setNum0( parseInt(e.target.value) );
    }
    
    function handleChange1(e:any){
        setNum1( parseInt(e.target.value) );
    }

    function calc(){
        setResult(num0 + num1);
    }

    return(
        <div>
            <input type="number" onChange={handleChange0} value={num0}></input>
            <br/>
            <input type="number" onChange={handleChange1} value={num1}></input>
            <br/>
            <input type="button" value="=" onClick={calc}></input>
            <p>Result: {result}</p>
        </div>
    );
}
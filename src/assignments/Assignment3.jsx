import {useState} from "react";
export default function Assignment3() {
    const [count, setCount] = useState(0);
    const increase=() => {
        setCount(prev=> prev+1);
    };
    const decrease =() => {
        setCount (prev => prev-1);
    };
    const reset=() => {
        setCount(0);
    };
    return(
        <div> 
            <h1> Counter App</h1>
            <h2> {count}</h2>
            <button onClick ={increase} > Increase</button>
            <button onClick ={decrease} > Decrease </button>
            <button onClick ={reset} > Reset</button>
        </div>
    );
}

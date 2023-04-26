import{useRef} from 'react';
export default function Bmi(){
    const w_inputRef=useRef(null);
    const h_inputRef=useRef(null);
    const calBmi=()=>w_inputRef
        let w=w_input.current.value;
        let h=h_input.current.value/100;
        setBmi (w / Math.pow(h,2));
    
    return(
    
        <>
        <h3>BMI Calculator</h3>
        Weight: <input
        type = "text"
        ref={w_inputRef} /> kg.
        Height:<input 
        type="text"
        ref={h+inputRef} /> cm.
        <button onClick={()=>calBmi()}>Calculator!</button><br/>
        Bmi value : {Bmi.toFixed(2)}
        </>
    )
}
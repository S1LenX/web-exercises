import React,{useRef,useState} from "react"
function Stateform(){
    const name=useRef("null");
    const email=useRef("null");
    const [sdata,setData]=useState(null);
    const submit=(e)=>{
        e.preventDefault();
        alert(`Submitted:\nName: ${name.current.value}\nEmail: ${email.current.value}`);
        setData({
            name:name.current.value,
            email:email.current.value
        }
        );
    };
    return(
        <>
        <form>
            <label>
            Name:<input type="text" ref={name}/>
            </label><br/>
            <label>
            email:<input type="text" ref={email}/>
            </label><br/>
            <button type="submit" onClick={submit}>Submit</button>
        </form>
        {sdata && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Name: {sdata.name}</p>
          <p>Email: {sdata.email}</p>
        </div>
      )}
        </>
    );

}
export default Stateform

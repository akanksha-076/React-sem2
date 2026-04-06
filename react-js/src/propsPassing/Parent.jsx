import react from 'react'
import Child from './Child'


const Parent=()=>{
    const fullname="Akanksha Kumari";
    function Alert(){
        alert("BUTTON CLICKED");
    }
    function Alert2(){
        alert("button 2 clicked")
    }
    return (
        <>
        <div>Parent</div>
        <h1>Rendered in parent component:{fullname}</h1>
        <Child name={fullname} alert={Alert} hi={Alert2}/>
        
        </>
    )

}
export default Parent
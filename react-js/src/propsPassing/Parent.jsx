import react from 'react'
import Child from './Child'


const Parent=()=>{
    const fullname="Akanksha Kumari";
    function Alert(){
        alert("BUTTON CLICKED");
    }
    return (
        <>
        <div>Parent</div>
        <h1>Rendered in parent component:{fullname}</h1>
        <Child name={fullname} alert={Alert}/>
        </>
    )

}
export default Parent
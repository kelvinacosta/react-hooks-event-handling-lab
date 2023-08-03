// Code EyesOnMe Component Here
import React from "react";


function EyesOnMe(){
    
    //Create an anonymous function
    const handleFocus = () => {
        console.log('Good!')
    }
    //Function declaration 
    function handleBlur(){
        console.log('Hey! Eyes on me!')
    }
    
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe;
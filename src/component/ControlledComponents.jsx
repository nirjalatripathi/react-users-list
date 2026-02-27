import React, {useState} from "react";
export default function AgeForm() {
    const [name, setName] =useState("");
     const [age, setAge]= useState("");
       
     const handleSubmit=(e) => {
        e.preventDefault();
        if (age > 18) {
            console.log ("Nmae:", name);
            console.log("Age:", age);
        } else {
            alert("Age must be greater than 18");
        }
     };
     return (
        <center>
            <form onSubmit={handleSubmit} > 
                <input type="text" placeholder="Enter your name" value={name} onChange={(e) =>
                    setName(e.target.value) 
                }/>
                <br/> <br/> 
                 
                 <input type="number" placeholder="Enter your age" value={age} onChange={(e) =>
                    setAge(e.target.value) 
                }/>
                <br/> <br/> 

                <button type="submit"> Handle Submit</button>
            </form>
        </center>
     );
    }
     
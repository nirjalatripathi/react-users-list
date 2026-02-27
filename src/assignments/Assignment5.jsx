import {useState} from "react";
export default function Assignment5() {
    const [formData, setFormData] = useState({
        name: " ",
        email: " ",
        message: " "

    });
    const handleChange=(e) => {
        const {name, value} =e.target;
        setFormData (prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit=(e) => {
        e.preventDefault();
    };
    return(
        <div> 
            <h1> Contact Form</h1>
            <form onSubmit= {handleSubmit}> 
                <input name="name" value={formData.name} onChange={handleChange} plpaceholder="Name"/>
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />
                 <button type="submit">Submit</button>
            </form>
            <h3> Preview:</h3>
            <p> Name: {formData.name}</p>
            <p> Email: {formData.email}</p>
            <p> Message: {formData.message}</p>
        </div>
    );
}
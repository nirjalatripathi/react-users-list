import {useState} from "react";
export default function Assignment6() {
    const [formData, setFormData] = useState({
        name: " ",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({});
    const handleChange=(e) => {
        const {name, value} = e.target;
        setFormDatan(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors={};
        if (!formData.name) newErrors.name="Name is required";
        if (!formData.email.includes("@.")) newErrors.email="Invalid email";
        if (formData.password.length < 6)
            newErrors.password="Password must be atleast 6 characters";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword="Passwords do not match";
        setErrors(newErrors);
    };
    return(
        <div>
            <h1> Registration Form</h1>
            <form onSubmit={handleSubmit} >
                <input name="name" onChange={handleChange} placeholder="Name"/> 
                {errors.name && <p> {errors.name}</p>}

                 <input name="email" onChange={handleChange} placeholder="Email" />
        {errors.email && <p>{errors.email}</p>}

        <input type="password" name="password" onChange={handleChange} placeholder="Password" />
        {errors.password && <p>{errors.password}</p>}

        <input type="password" name="confirmPassword" onChange={handleChange} placeholder="Confirm Password" />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <button type="submit">Register</button>
   
            </form>
        </div>
    );
}
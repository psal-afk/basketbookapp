import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setMessage("Passwords do not match!");
        } else {
            setMessage("Registration successful!");
            setTimeout(() => navigate("/dashboard"), 1500);
        }
    };

    return (
        <div className ="bigContainer">
            <div className="container">
                <h2>🏀 Register in Basket Book</h2>
                <form id="registerForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Full Name" 
                        value={formData.fullName} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        required 
                    />
                    <p id="message">{message}</p>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

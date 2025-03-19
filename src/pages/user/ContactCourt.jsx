import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactCourtPage = () => {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent!")
    
    };

  return (
    <div className="contact-court-page">
      <h1>Contact the Court Manager</h1>
      <div className="form-container">
      <form action="#" className="add-court-form" onSubmit={handleSubmit}>
                    <p>Title : 
                        <input
                        type="text"
                        className="input-field"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        />
                    </p>
                    <p>Message: </p>
                    <textarea 
                        className="input-field" 
                        name="postContent" 
                        rows={4} 
                        cols={40} 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        />
                    <br />
                    <button className="add-button">Submit</button>
                </form>
      </div>
    </div>
  );
};

export default ContactCourtPage;
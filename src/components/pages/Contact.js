import React,{useState} from "react";

import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e) => {
    
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'contactName') {
      setContactName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      
      return;
      
    }
    

    
    setContactName('');
    setEmail('');
    setMessage('');
  };
    return(
        <div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Contact</h2>
                <label>Name:</label>
                    <input
                        type="text"
                        placeholder="What is your name?"
                        value={contactName}
                        name="contactName"
                        onChange={handleInput}
                    ></input>

                <label>Email address:</label>
                <input
                        type="text"
                        placeholder="What is your email?"
                        value={email}
                        name="email"
                        onChange={handleInput}
                    ></input>
                <label>Message:</label>
                <input
                        type="text"
                        placeholder="Type your message here."
                        value={message}
                        name="text"
                        onChange={handleInput}
                    ></input>
                     <button type="button" onClick={handleSubmit}>Submit</button>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>

    )
}
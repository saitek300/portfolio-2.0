import React from "react";

// import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  
  // const [contactName, setContactName] = useState('');
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleInput = (e) => {
    
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === 'email') {
  //     setEmail(inputValue);
  //   } else if (inputType === 'contactName') {
  //     setContactName(inputValue);
  //   } else {
  //     setMessage(inputValue);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!validateEmail(email)) {
  //     setErrorMessage('Email is invalid');
      
  //     return;
      
  //   }
    

    
  //   setContactName('');
  //   setEmail('');
  //   setMessage('');
  // };
  const styles = {
    h1Style:{
        textAlign: 'center',
        fontSize: '45px',
        display: 'flex',
        justifyContent: 'center',

    },
    h2Style:{
      textAlign: 'center',
      fontSize: '35px',
      display: 'flex',
      justifyContent: 'center',

  },
    textStyle: {
        textAlign: 'center',
        fontSize: '22px',
        display: 'flex',
        justifyContent: 'center',
    },
   
 }
    return(
        <div className="contact-form">
                <h1 style={styles.h1Style}>Contact</h1>
                <a href="mailto:saitek300@gmail.com" style={styles.textStyle}>saitek300@gmail.com</a>
                <h2 style={styles.h2Style}>Phone #</h2>
                <p style={styles.textStyle}>(916) 475-2480</p><br></br>
                <p style={styles.textStyle}>(*for additional contact links use the icons below)</p>
                
        </div>

    )
}
import React from "react";
import miloPic from '../../images/milo profile pic.jpg'

const styles = {
    h1Style:{
        textAlign: 'center',
        fontSize: '45px',
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

export default function About() {
    return(
        <div>
            <img src={miloPic} className='profilePic'></img>
            <h1 style={styles.h1Style}>About Me</h1>
            <p style={styles.textStyle}>Hello, My name is Milo Ellsworth.<br></br>
            I'm an aspiring full stack web developer, <br></br>
            looking for opportunities to grow within a diverse and inclusive company.<br></br>
            Some of my values include: <br></br>
            communication,<br></br>
            teamwork,<br></br>
            transparancy,<br></br>
            and respect for the individual.<br></br>
            I'm always looking for something new to learn and striving for personal exellence.
            </p>
        </div>
    )
}
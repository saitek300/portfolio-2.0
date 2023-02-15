import React from 'react';
import '../styles/Footer.css'


const styles ={
    footerStyle: {
        background:'#0F1A18',
        color:'#D3DFB8',
        position: 'fixed',
        left:0,
        bottom:0,
       
    }
}
export default function Footer() {
    return(
        <div style={styles.footerStyle} className="footer">
        <a href='https://github.com/saitek300' className="fa-brands fa-github fa-3x"></a>

        <a href='https://www.linkedin.com/in/milo-ellsworth-b68812189/' className="fa-brands fa-linkedin fa-3x"></a>

        <a href='https://stackoverflow.com/users/19841520/saitek300?tab=profile' className="fa-brands fa-stack-overflow fa-3x"></a>
        </div>
    )
}
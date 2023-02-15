import React, {useState} from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import '../styles/Header.css'


const styles ={
    headerStyle: {
        margin:'0px',
        background:'#0F1A18',
        color:'#D3DFB8'
    }
}
function Header() {
    const[currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About/>;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio/>;
        }
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
        if (currentPage === 'Resume') {
            return <Resume/>;
        }
    };

    const handlePageChange = setCurrentPage;

    return (
        <header style={styles.headerStyle}>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

          {renderPage()}
        </header>
    );
}
export default Header;
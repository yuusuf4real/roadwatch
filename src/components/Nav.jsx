import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}><Link to='/'>Home</Link></li>
                <li style={styles.li}><Link to='/signup'>Signup</Link></li>
                <li style={styles.li}><Link to='/signin'>Sign in</Link></li>
            </ul>
        </nav>
    </div>
  )
}


const styles = {
    nav: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    ul: {
        display: 'flex',
        justifyContent: 'flex-end'
    },

    li: {
        margin: '.5rem',
        padding: 0,
        textIndent: 0,
        listStyleType: 'none',
        color: 'inheret'
}

}




export default Nav
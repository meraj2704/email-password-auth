import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' flex gap-4 justify-center font-bold text-2xl'>
            <Link className='' to='/'>Home</Link>
            <Link to='/register'>Register</Link>
            <Link to='/register-rbs'>Register Rbs</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
};

export default Header;
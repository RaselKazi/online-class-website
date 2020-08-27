import React from 'react';
import './Header.css';



const Header = (props) => {

    const users = props.users;
    return (
        <div className="row bg-dark mb-5 p-3">
        <div className="col-md-6">
            <h1 className='text-warning'>Online Course</h1>
        </div>
        <div className='col-md-6'>
       
                
        </div>
    </div>
    );
};

export default Header;
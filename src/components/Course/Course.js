import React,{useState}  from 'react';
import './Course.css';

const Course = (props) => {

    const {title, trainer, price, picture } = props.course;

        const [btnText, setBtnText] = useState('ENROLL NOW');
        const changeText = (text) => setBtnText(text);
    return (
        


        <div className="col-xl-3 col-lg-3 col-md-3">
            <div className="card mb-4 border-warning">
                <img src= {picture} className="card-img" />
                    <div className="card-body text-left">
                        <h3 className="card-title text-info align">{title}</h3>
                         <p className="card-text text-secondary align">By  : {trainer} </p>
                         <h4 className="card-text text-danger align">$ {price} </h4>

                         <div className="d-flex justify-content-center">
                  <button onClick={() => {props.click(props.course);changeText('Added')}}  type="button" className=" green-btn d-flex justify-content-center">{btnText}</button>
                </div>
            </div> 
            </div>
       </div>
    );
};

export default Course;
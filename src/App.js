import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Course from './components/Course/Course';
import Cart from './components/Cart/Cart';
import CourseData from '../src/CourseData/CourseData';
function App() {

  const [cart, setCart] = useState([]);

  const handleAddCourse = (course) => {
  const newCart = [...cart, course];
  setCart(newCart);
   
  };
 
  console.log(cart)
  return (
    <div className="App">
      <div className="container-fluid">
        <Header users={cart}></Header>
        <div className="row">
          <div className="col-lg-9">
              <div className="row">
                {
                    CourseData.map(course => <Course key={course.id} click={handleAddCourse} course={course}></Course>)
                  }
            </div>
          </div>
          <div className="col-lg-3 ">
            <div className="sticky-top">
              <Cart cart={cart}></Cart>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
}

export default App;

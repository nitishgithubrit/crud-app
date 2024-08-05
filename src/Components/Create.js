import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';


function Create() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://66b092266a693a95b5393de1.mockapi.io/crud', {
      e_name: name,
      e_age: age,
      e_email: email
    })
    .then((response) => {
      // You can handle successful response here if needed
      console.log('Data submitted successfully!');
    })
    .catch((error) => {
      // You can handle error response here if needed
      console.error('There was an error submitting the data!', error);
    }).then (() => {
        navigate('/');
    })
  };

  return (
    <>
      <div className='row'>
        <div className='col-md-4'>
        <div className='mb-2 mt-2'>
                    <Link to='/'>
                    <button className='btn btn-primary'>Read Data</button>
                    </Link>
                  </div>
          <div className='bg-primary p-4 text-center'>
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label>Enter Name:</label>
              <input
                type="text"
                placeholder='Name'
                className='form-control'
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Enter Age:</label>
              <input
                type="number"
                placeholder='Age'
                className='form-control'
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label>Enter Email:</label>
              <input
                type="email"
                placeholder='Email'
                className='form-control'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <input type='submit' value='Submit' className='btn btn-primary' />
          </form>

          <div className='mt-4'>
            <h3>Submitted Data:</h3>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;

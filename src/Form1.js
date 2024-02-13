import React from 'react'
import { useState } from 'react'


export default function InputExample() {
    let initialData = {
        name: "",
        email: "",
        country: "",
        age: "",
        pass: "",
       
    }
    const [data, setData] = useState(initialData)
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const validateForm = () => {
        let isValid = true;
        const newErrors = { ...formErrors };
    
        // Name validation
        if (formData.name.trim() === '') {
          newErrors.name = 'Name is required';
          isValid = false;
        } else {
          newErrors.name = '';
        }
    
        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
          newErrors.email = 'Invalid email address';
          isValid = false;
        } else {
          newErrors.email = '';
        }
    
        // Password validation
        if (formData.password.length < 6) {
          newErrors.password = 'Password must be at least 6 characters long';
          isValid = false;
        } else {
          newErrors.password = '';
        }
    
        setFormErrors(newErrors);
        return isValid;
      };
    
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
  
      
    
    function postData(e) {
        e.preventDefault()
  
        alert(`
            Name            :   ${data.name}
            Email           :   ${data.email}
            Country         :   ${data.country}
            Age             :   ${data.age}
            pass            :   ${data.password}
            
        `)
        setData(initialData)
    }
    return (
        <>
            <div className="main">
                <div className="center">
                    <form onSubmit={postData}>
                       <label htmlFor='name'>Name:</label>
                        <input type="text" id='name' name="name" value={data.name} required onChange={getInputData} placeholder='Enter Full Name' /> <br/>
                        <p style={{ color: 'red' }}>{formErrors.name}</p>
                        <label htmlFor='email'>Email:</label>
                        <input type="email" id='email' name="email" value={data.email} required onChange={getInputData} placeholder='Enter Email Address' />
                         <br/>
                        <label htmlFor='count'>Country:</label>
                        <input type="text" id='count' name="country" value={data.country} required onChange={getInputData} placeholder='Enter country' /> <br/>
                        <label htmlFor='age'>Age :</label>
                        <input type="text" id='age'  name="age" value={data.age} required onChange={getInputData} placeholder='Enter age' /> <br/>
                        <label htmlFor='sal'>Password : </label>
                        <input type="number" id='sal' name="password" value={data.password} required onChange={getInputData} placeholder='Enter pass' /> <br/>
                        <p style={{ color: 'red' }}>{formErrors.password}</p>
                       
                        <button type='submit'>Submit</button> <br/>
                    </form>
                </div>
            </div>
        </>
    )
}
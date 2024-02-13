import React, { useState } from 'react';
const FullValidationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age:'',
    country: '',
    password: '',  
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    age:'',
    country: '',
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

    // Age validation
    if (!/^\d+$/.test(formData.age) || parseInt(formData.age, 10) < 0) {
      newErrors.age = 'Invalid age';
      isValid = false;
    } else {
      newErrors.age = '';
    }

    // Country validation
    if (formData.country.trim() === '') {
      newErrors.country = 'Country is required';
      isValid = false;
    } else {
      newErrors.country = '';
    }

    // Password validation
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    } else {
      newErrors.password = '';
    }
    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    } else {
      newErrors.email = '';
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(`
      Name            :   ${formData.name}
      Email           :   ${formData.email}
      Phone           :   ${formData.age}
      Designation     :   ${formData.country}
      Salary          :   ${formData.password}
     
  `)
    } else {
      alert('Form has validation errors. Please correct and submit again.');
    }

    
  };

  return (
    <div className="main">
        <div className='center'>
    <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name" required
          value={formData.name}
          onChange={handleChange}
        />
        <p style={{ color: 'red' }}>{formErrors.name}</p>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email" required
          value={formData.email}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.email}</span>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age" required
          value={formData.age}
          onChange={handleChange}
        />
        <p style={{ color: 'red' }}>{formErrors.age}</p>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country" required
          value={formData.country}
          onChange={handleChange}
        />
        <p style={{ color: 'red' }}>{formErrors.country}</p>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password" required
          value={formData.password}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.password}</span>
        <br/>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default FullValidationForm;

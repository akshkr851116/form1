import React, { useState } from 'react';

const ValidationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age:'',
    country:'',
    password: '',
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormData()
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform form submission or other actions
      console.log('Form submitted with data:', formData);
    } else {
      console.log('Form has validation errors. Please correct and submit again.');
    }
    
    alert(`
    Name            :   ${formData.name}
    Email           :   ${formData.email}
    Country         :   ${formData.country}
    Age             :   ${formData.age}
    pass            :   ${formData.password}
    
`)

  };

  return (
    <div className='main'>
      <div className='center'>
    <form onSubmit={handleSubmit}>
      
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.name}</span>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span style={{ color: 'red' }}>{formErrors.email}</span>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="count">Country:</label>
        <input
          type="text"
          id="count"
          name="email"
          value={formData.country}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}/> 
        <span style={{ color: 'red' }}>{formErrors.password}</span>
        <br/><br/>
      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default ValidationForm;






// import React, { useState } from 'react';

// const NameValidationForm = () => {
//   const [name, setName] = useState('');
//   const [isValid, setIsValid] = useState(true);

//   const handleNameChange = (e) => {
//     const newName = e.target.value;
//     setName(newName);
//     // Perform validation (for example, checking if the name contains only letters)
//     setIsValid(/^[a-zA-Z]+$/.test(newName));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform any additional actions on form submission
//     if (isValid) {
//       console.log('Form submitted with name:', name);
//       // Add your logic to submit the form data to the server or perform other actions
//     } else {
//       console.log('Invalid name. Please correct and submit again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={handleNameChange}
//           style={{ borderColor: isValid ? 'initial' : 'red' }}
//         />
//       </label>
//       {!isValid && <p style={{ color: 'red' }}>Please enter a valid name.</p>}
//       <button type="submit" disabled={!isValid}>
//         Submit
//       </button>
//     </form>
//   );
// };

// export default NameValidationForm;

import React from 'react'
import { useState } from 'react'


export default function InputExample() {
    let initialData = {
        name: "",
        email: "",
        phone: "",
        designation: "",
        salary: "",
        city: "Noida",
        state: "Up"
    }
    let [data, setData] = useState(initialData)
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
            Phone           :   ${data.phone}
            Designation     :   ${data.designation}
            Salary          :   ${data.salary}
            City            :   ${data.city}
            State           :   ${data.state}
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
                        <label htmlFor='email'>Email:</label>
                        <input type="email" id='email' name="email" value={data.email} required onChange={getInputData} placeholder='Enter Email Address' /> <br/>
                        <label htmlFor='phone'>Phone:</label>
                        <input type="text" id='phone' name="phone" value={data.phone} required onChange={getInputData} placeholder='Enter Phone Number' /> <br/>
                        <label htmlFor='desi'>Designation :</label>
                        <input type="text" id='desi'  name="designation" value={data.designation} required onChange={getInputData} placeholder='Enter Designation' /> <br/>
                        <label htmlFor='sal'>Salary : </label>
                        <input type="number" id='sal' name="salary" value={data.salary} required onChange={getInputData} placeholder='Enter Salary' /> <br/>
                        <label htmlFor='city'>Salary : </label>
                        <input type="text" id='city' name="city" value={data.city} required onChange={getInputData} placeholder='Enter City' /> <br/>
                        <label htmlFor='state'>Salary : </label>
                        <input type="text" id='state' name="state" value={data.state} required onChange={getInputData} placeholder='Enter State' /> <br/>
                        <button type='submit'>Submit</button> <br/>
                    </form>
                </div>
            </div>
        </>
    )
}


// import React from 'react'
// import { useState } from 'react'

// export default function InputExample() {
//     let [data, setData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         designation: "",
//         salary: "",
//         city: "",
//         state: ""
//     })
//     function getInputData(e) {
//         var { name, value } = e.target
//         setData((old) => {
//             return {
//                 ...old,
//                 [name]: value
//             }
//         })
//     }
//     function postData(e) {
//         e.preventDefault()
//         alert(`
//             Name            :   ${data.name}
//             Email           :   ${data.email}
//             Phone           :   ${data.phone}
//             Designation     :   ${data.designation}
//             Salary          :   ${data.salary}
//             City            :   ${data.city}
//             State           :   ${data.state}
//         `)
//         setData({
//             name: "",
//             email: "",
//             phone: "",
//             designation: "",
//             salary: "",
//             city: "",
//             state: ""
//         })
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h3>Functional Component Input Example</h3>
//                     <h3>Name : {data.name}</h3>
//                     <h3>Email : {data.email}</h3>
//                     <h3>Phone : {data.phone}</h3>
//                     <h3>Designation : {data.designation}</h3>
//                     <h3>Salary : {data.salary}</h3>
//                     <h3>City : {data.city}</h3>
//                     <h3>State : {data.state}</h3>
//                     <form onSubmit={postData}>
//                         <input type="text" name="name" required onChange={getInputData} placeholder='Enter Full Name' />
//                         <input type="email" name="email" required onChange={getInputData} placeholder='Enter Email Address' />
//                         <input type="text" name="phone" required onChange={getInputData} placeholder='Enter Phone Number' />
//                         <input type="text" name="designation" required onChange={getInputData} placeholder='Enter Designation' />
//                         <input type="number" name="salary" required onChange={getInputData} placeholder='Enter Salary' />
//                         <input type="text" name="city" required onChange={getInputData} placeholder='Enter City' />
//                         <input type="text" name="state" required onChange={getInputData} placeholder='Enter State' />
//                         <button type='submit'>Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     )
// }



// import React from 'react'
// import { useState } from 'react'

// export default function InputExample() {
//     let [data, setData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         designation: "",
//         salary: "",
//         city: "",
//         state: ""
//     })
//     function getInputData(e) {
//         var { name, value } = e.target
//         setData((old) => {
//             return {
//                 ...old,
//                 [name]: value
//             }
//         })
//     }
//     function postData() {
//         alert(`
//             Name            :   ${data.name}
//             Email           :   ${data.email}
//             Phone           :   ${data.phone}
//             Designation     :   ${data.designation}
//             Salary          :   ${data.salary}
//             City            :   ${data.city}
//             State           :   ${data.state}
//         `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h3>Functional Component Input Example</h3>
//                     <h3>Name : {data.name}</h3>
//                     <h3>Email : {data.email}</h3>
//                     <h3>Phone : {data.phone}</h3>
//                     <h3>Designation : {data.designation}</h3>
//                     <h3>Salary : {data.salary}</h3>
//                     <h3>City : {data.city}</h3>
//                     <h3>State : {data.state}</h3>
//                     <input type="text" name="name" onChange={getInputData} placeholder='Enter Full Name' />
//                     <input type="email" name="email" onChange={getInputData} placeholder='Enter Email Address' />
//                     <input type="text" name="phone" onChange={getInputData} placeholder='Enter Phone Number' />
//                     <input type="text" name="designation" onChange={getInputData} placeholder='Enter Designation' />
//                     <input type="number" name="salary" onChange={getInputData} placeholder='Enter Salary' />
//                     <input type="text" name="city" onChange={getInputData} placeholder='Enter City' />
//                     <input type="text" name="state" onChange={getInputData} placeholder='Enter State' />
//                     <button onClick={postData}>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }



// import React from 'react'
// import { useState } from 'react'

// export default function InputExample() {
//     let [name, setName] = useState("")
//     let [email, setEmail] = useState("")
//     let [phone, setPhone] = useState("")
//     let [designation, setDesignation] = useState("")
//     let [salary, setSalary] = useState("")
//     let [city, setCity] = useState("")
//     let [state, setState] = useState("")
//     function getInputData(e) {
//         var { name, value } = e.target
//         switch (name) {
//             case "name":
//                 setName(value)
//                 break
//             case "email":
//                 setEmail(value)
//                 break
//             case "phone":
//                 setPhone(value)
//                 break
//             case "designation":
//                 setDesignation(value)
//                 break
//             case "salary":
//                 setSalary(value)
//                 break
//             case "city":
//                 setCity(value)
//                 break
//             case "state":
//                 setState(value)
//                 break
//         }
//     }
//     function postData() {
//         alert(`
//             Name            :   ${name}
//             Email           :   ${email}
//             Phone           :   ${phone}
//             Designation     :   ${designation}
//             Salary          :   ${salary}
//             City            :   ${city}
//             State           :   ${state}
//         `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h3>Functional Component Input Example</h3>
//                     <h3>Name : {name}</h3>
//                     <h3>Email : {email}</h3>
//                     <h3>Phone : {phone}</h3>
//                     <h3>Designation : {designation}</h3>
//                     <h3>Salary : {salary}</h3>
//                     <h3>City : {city}</h3>
//                     <h3>State : {state}</h3>
//                     <input type="text" name="name" onChange={getInputData} placeholder='Enter Full Name' />
//                     <input type="email" name="email" onChange={getInputData} placeholder='Enter Email Address' />
//                     <input type="text" name="phone" onChange={getInputData} placeholder='Enter Phone Number' />
//                     <input type="text" name="designation" onChange={getInputData} placeholder='Enter Designation' />
//                     <input type="number" name="salary" onChange={getInputData} placeholder='Enter Salary' />
//                     <input type="text" name="city" onChange={getInputData} placeholder='Enter City' />
//                     <input type="text" name="state" onChange={getInputData} placeholder='Enter State' />
//                     <button onClick={postData}>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }



// import React from 'react'
// import { useState } from 'react'

// export default function InputExample() {
//     let [name, setName] = useState("")
//     function getInputData(e) {
//         setName(e.target.value)
//     }
//     function postData() {
//         alert("Name" + name)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h3>Functional Component Input Example</h3>
//                     <h3>Name : {name}</h3>
//                     <input type="text" name="name" onChange={getInputData} placeholder='Enter Full Name' />
//                     <button onClick={postData}>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }
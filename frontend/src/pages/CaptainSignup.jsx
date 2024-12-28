import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const [firstname, setFirstName] = useState(''); 
  const [lastname, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email,password,firstName,lastName);
    setUserData({
      fullname:{
        firstname: firstname,
        lastname: lastname
      },
      email: email,
      password: password
    });
    console.log(userData)
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');

  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
        <img src='https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png' 
                      alt="Uber Logo" 
                    className="w-16  mt-10  mb-5"
                    />
          <form onSubmit={(e) => submitHandler(e)}>
            <h3 className='text-lg mb-2 font-medium'>First Name</h3>
            <input className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base' required type="text" placeholder='First Name'  value={firstname} onChange={(e) => setFirstName(e.target.value)}/>
            <h3 className='text-lg mb-2 font-medium'>Last Name</h3>
            <input className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base' required type="text" placeholder='Last Name'  value={lastname} onChange={(e) => setLastName(e.target.value)}/>
            <h3 className='text-lg mb-2 font-medium'>Your Email</h3>
            <input className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='email@example.com'  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h3 className='text-lg mb-2 font-medium'>Enter password</h3>
            <input className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='bg-black text-white px-4 py-2 mb-3 rounded w-full font-semibold'>Register</button>
            <p className='flex justify-center' >Already have an account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
          </form>
     </div>
    </div>
  )
}

export default CaptainSignup

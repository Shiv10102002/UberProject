import React,{useState} from 'react'
import { Link } from 'react-router-dom'
const UserLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] =useState('');
  const [userData, setUserData] = useState({});
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email,password);
    setUserData({
      email: email,
      password: password
    });
    console.log(userData)
    setEmail('');
    setPassword('');

  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
     <div>
        <img src='https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png' 
                      alt="Uber Logo" 
                    className="w-16  mt-10  mb-5"
                    />
          <form onSubmit={(e) => submitHandler(e)}>
            <h3 className='text-lg mb-2 font-medium'>What's your email</h3>
            <input className='bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base' required type="email" placeholder='email@example.com'  value={email} onChange={(e) => setEmail(e.target.value)}/>
            <h3 className='text-lg mb-2 font-medium'>Enter password</h3>
            <input className='bg-[#eeeeee] rounded px-4 py-2 mb-7 border w-full text-lg placeholder:text-base' required type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button className='bg-black text-white px-4 py-2 mb-3 rounded w-full font-semibold'>Login</button>
            <p className='flex justify-center' >New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
          </form>
     </div>
     <div className='mt-5'>
        <Link to='/captain-login' className='flex inline-block justify-center items-center bg-[#10b461] text-white px-4 py-2 rounded w-full font-semibold' >Sing in as Captain</Link>
     </div>
    </div>
  )
}

export default UserLogin

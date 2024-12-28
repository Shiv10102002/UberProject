import React from 'react'
import { Link } from 'react-router-dom'

const Home = ()=>{
    return(
        <div>
            <div className="h-screen pt-8  flex justify-between flex-col w-full    flex-col bg-cover bg-bottom  bg-[url('https://plus.unsplash.com/premium_vector-1725871957698-e5e9990a6336?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] "> 
                <img src='https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png' 
                   alt="Uber Logo" 
                className="w-16 mx-auto mt-10 ml-9"
                />
               <div className="bg-white py-4 px-4">
                    <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                    <Link to='/login' className='flex justify-center w-full bg-black text-white py-3 mt-5 rounded'>Continue</Link>
               </div>
            </div>
        </div>
    )
}
export default Home

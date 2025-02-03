import React from 'react';

const Register = ({openLogin}) => {
    return (
        <div>
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
        <form>
            <div className='mb-4'>
                <label className='block text-gray-700'>Name</label>
                <input type='text' className='w-full px-3 py-2 border'
                placeholder='Enter Name'/>       
            </div>
            <div>
                <label className='block text-gray-700' >Email</label>
                <input type='email' className='w-full px-3 py-2 border' 
                placeholder='Enter E-mail'/>
            </div>
            <div className='mb-4'>
                <label className='block text-gray-700'>password</label>
                <input type='password' placeholder='Enter Password'/>
            </div>
           
            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 text-white py-2'>Sign up</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Alreday Have an Account?</span>
            <button className='text-red-800' onClick={openLogin}> Log In</button>
        </div>
    </div>
    );
};

export default Register;
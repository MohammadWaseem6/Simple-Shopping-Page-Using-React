import React from 'react';

function NavBar() {
    return (
        <div>
            <nav className='container mx-auto px-4 py-6'>
                <div className='flex items-center justify-between'>
                    <div className='logo'>
                        <img src="/Images/brand_logo.png" alt="logo" className='h-12 w-auto' />
                    </div>
                    <ul className='flex space-x-4 font-bold'>
                        <li><a href="#" className='text-gray-700  hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300'>Home</a></li>
                        <li><a href="#" className='text-gray-700  hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300'>Location</a></li>
                        <li><a href="#" className='text-gray-700  hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300'>About</a></li>
                        <li><a href="#" className='text-gray-700  hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition duration-300'>Contact</a></li>
                    </ul>

                    <button className='font-bold text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white hover:border-transparent py-2 px-4 rounded-md transition duration-300'>
                        Login
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;

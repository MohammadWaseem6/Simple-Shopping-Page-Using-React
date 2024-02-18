import React from 'react';

function HeroSection() {
    return (
        <main className='hero-container m-20'>
            <div className='hero-content flex justify-end items-center'>
                <div className='text mr-44'>
                    <h1 className='ml-20 text-6xl font-extrabold'>
                        YOUR FEET <br />
                        DESERVE <br />
                        THE BEST
                    </h1>
                    <p className='ml-10 mt-11 font-semibold'>YOUR FEET DESERVE THE BEST AND WE’RE HERE<br /> TO HELP YOU WITH OUR
                        SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
                        SHOES.</p>
                    <div className='hero-btn'>
                        <button className='font-bold text-white bg-blue-600 border-2 border-blue-600 hover:bg-purple-700 hover:border-blue-700 py-2 px-4 rounded-md transition duration-300 ml-16'>Shop Now</button>
                        <button className='font-bold text-white bg-green-600 border-2 border-green-600 hover:bg-yellow-500 hover:border-green-700 py-2 px-4 rounded-md transition duration-300 ml-5 mt-5'>Category</button>
                    </div>

                    <div className='shopping mt-9 ml-10 font-medium display flex items-center justify-center space-x-7 '>
                        <p >Also Available On</p>
                        <img  src="/Images/amazon.png" alt="amazon-logo" />
                        <img src="/Images/flipkart.png" alt="flipkart-logo" />

                    </div>
                </div>
                <div className='Hero-image'>
                    <img src="/Images/hero-image.png" alt="hero-image" />
                </div>
            </div>
        </main>
    );
}

export default HeroSection;

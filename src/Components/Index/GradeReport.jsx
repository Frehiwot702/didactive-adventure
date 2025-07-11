import React from 'react'

const GradeReport = () => {
  return (
    <div 
        className='text-center py-10 h-screen bg-gray-300 text-md space-y-5 font-mono'
    >
        <h3 className='text-2xl font-bold'>GRADE REPORT</h3>
        <h3 className='font-bold text-lg'>Programming Fundamentals I</h3>
        

        <div 
            className='text-start px-5 flex space-x-5 py-10'
        >
            <div className='w-2/3 space-y-3'>
                <h3 for='id'>Enter your ID</h3>
                <input 
                    id='id'
                    placeholder='RCD/****/****'
                    className='px-3 py-3 w-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none p-2 rounded-md'
                    type='text'
                />
            </div>
            <button 
                className='bg-blue w-1/3 px-5 py-2 rounded-md text-white'
            >View Result</button>

        </div>
        <div>
           <div className='grid grid-cols-3 w-full mx-auto'>

            <h3 className='font-bold text-lg'>Assessment</h3>
            <h3 className='font-bold text-lg'>Weight</h3>
            <h3 className='font-bold text-lg'>Result</h3>

            <h3>Mid</h3>
            <h3>30</h3>
            <h3>25</h3>

            <h3>Test</h3>
            <h3>10</h3>
            <h3>25</h3>

            <h3>Project</h3>
            <h3>20</h3>
            <h3>25</h3>

            <h3>Final</h3>
            <h3>50</h3>
            <h3>25</h3>
           </div>
           <h3 className='text-2xl font-bold my-10'>Total Score: 100%</h3>
        </div>
        <div>
            <input
                className='w-4/5 px-3 py-2 rounded-md'
                placeholder='Leave a comment'
            />
        </div>
    </div>
  )
}

export default GradeReport
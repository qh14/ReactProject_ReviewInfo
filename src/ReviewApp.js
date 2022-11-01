import React from 'react'
import Review from './Review'
import './index.css'
function ReviewApp() {
    return (
        <main>
            <div className='container'>
                <div className='title'>
                    <h2>Our Review </h2>
                    <div className='underline'></div>
                </div>
                <Review />
            </div>
        </main>

    );
}

export default ReviewApp
import React from 'react';

const Second = () => {
    return (
        <div>
            <div className="hero my-5 bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDxfYyFzY-ZWDYH_CPx9OuQfyeGnrDZM8IA&usqp=CAU" className="w-1/2 rounded-lg shadow-2xl" />
                    <div className='w-1/2'>
                        <h1 className="text-5xl font-bold">SOCIAL MEDIA!</h1>
                        <p className="py-6">Tools for digital campaigners. Promote your protests & recruit volunteers online. Handbook for online campaigners. Training and resources for activists. Training & workshops..</p>
                        <button className="btn btn-primary">POST</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;
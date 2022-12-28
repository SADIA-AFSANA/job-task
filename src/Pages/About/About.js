import React from 'react';
import Modal from '../Modal/Modal';

const About = () => {
    return (
        <div>
            <Modal></Modal>
            <div className='text-end'>

                <label htmlFor="modal" className="btn btn-secondary">Edit</label>
            </div>
            <input type="text" placeholder="Name" className="input input-bordered w-full my-5 max-w-xs" />
            <br />
            <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs" />
            <br />
            <input type="text" placeholder="University" className="input input-bordered w-full my-5 max-w-xs" />
            <br />
            <input type="text" placeholder="Address" className="input input-bordered mb-5 w-full max-w-xs" />
            <br />
            <button className='btn btn-success mb-10'>Save </button>
        </div>
    );
};

export default About;
import React from 'react';

const Modal = () => {
    return (
        <>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
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
            </div>
        </>
    );
};

export default Modal;
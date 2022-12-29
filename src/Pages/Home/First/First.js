import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const First = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleFirst = data => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imgData.data.url);
                    const media = {
                        text: data.text,
                        image: imgData.data.url
                    }
                    fetch('https://y-lyart-mu.vercel.app/medias', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(media)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            navigate('/media')
                        })
                }

            })
    }
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    return (
        <div className=' justify-center items-center bg-gray-200 pl-20 pb-5'>

            <form onSubmit={handleSubmit(handleFirst)} >


                <br />
                <input type="text" placeholder="text" className="input input-bordered w-full my-5 max-w-xs" />
                <br />
                <div>
                    <label className='label'> <span className='label-text'>Photo</span></label>
                    <input type="file"{...register("img")}></input>
                </div>

                <input className='btn btn-primary' value='submit' type="submit" />
            </form>
        </div>
    );
};

export default First;
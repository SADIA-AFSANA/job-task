import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';

const Media = () => {
    const { data: medias, isLoading } = useQuery({
        queryKey: ['medias'],
        queryFn: async () => {
            try {
                const res = await fetch('https://y-lyart-mu.vercel.app/medias', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <h1>Media : {medias?.length}</h1>
            <div className="overflow-x-auto  ">
                <table className="table w-full ">

                    <thead>
                        <tr className=''>
                            <th></th>
                            <th>text</th>
                            <th>Photo</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <th></th>
                            <th>text</th>
                            <th>Photo</th>

                        </tr> */}

                        {
                            medias.map((media, i) => <tr key={media._id}>
                                <th>{i + 1}</th>
                                <td>Hi, I am Sadia</td>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={media.image} alt='' />
                                    </div>
                                </div></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Media;
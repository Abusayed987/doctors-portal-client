import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/users');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='w-11/12'>
            <div>
                <h2 className='text-2xl'>All Users</h2>
            </div>
            <div>
                <div className="overflow-x-auto mt-4">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr
                                    className="hover"
                                    key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{ }</td>
                                    <td>{ }</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/users');
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`http://localhost:4000/users/admin/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    refetch()
                    toast.success('Admin Added ')
                }
            })
    }


    return (
        <div className='w-11/12'>
            <div>
                <h2 className='text-2xl'>All Users</h2>
            </div>
            <div>
                <div className="overflow-x-auto mt-4">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Admin</th>
                                <th>Delete</th>
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
                                    <td>
                                        {user?.role !== "admin" ?
                                            <button
                                                onClick={() => handleMakeAdmin(user._id)}
                                                className='btn btn-primary btn-xs text-white'>Make Admin ?</button>
                                            :
                                            <button
                                                className=' rounded-sm btn-success btn-xs text-white'>Admin</button>
                                        }
                                    </td>
                                    <td><button className='btn btn-error btn-xs text-white'>Delete</button></td>
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
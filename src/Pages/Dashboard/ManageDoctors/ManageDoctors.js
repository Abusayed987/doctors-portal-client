import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import ConformationModal from '../../Shared/ConformationModal/ConformationModal';

const ManageDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const closeModal = () => {
        setDeletingDoctor(null)
    }


    const { data: doctors = [], refetch, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/doctors', {
                headers: {
                    authorization: `bearer ${localStorage.getItem("accessToken")}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteDoctor = doctor => {
        fetch(`http://localhost:4000/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    refetch()
                    toast.success(`${doctor.name} Deleted successfully`)
                }
            })
    }

    return (
        <div className=' w-11/12 '>
            <div className=''>
                <h2 className='text-2xl'>Manage Doctors: {doctors.length}</h2>
            </div>
            <div className="overflow-x-auto mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) =>
                                <tr className="hover"
                                    key={doctor._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={doctor.image} alt='' />
                                            </div>
                                        </div>

                                    </td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.specialty}</td>
                                    <td>
                                        <label
                                            onClick={() => setDeletingDoctor(doctor)} htmlFor="conformation-modal"
                                            className="btn btn-outline btn-error btn-xs">Delete</label>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor &&
                <ConformationModal
                    tittle={`Are you sure that You want to delete ?`}
                    message={`If you delete ${deletingDoctor.name}, it cannot be recovered .`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    successBtnName="Delete"
                    modalData={deletingDoctor}
                ></ConformationModal>
            }
        </div>
    );
};

export default ManageDoctors;
import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()


    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ["specialty"],
        queryFn: async () => {
            const res = await fetch("http://localhost:4000/appointmentSpecialty");
            const data = await res.json();
            return data
        }
    })

    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    // Save Doctor info in the database
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch('http://localhost:4000/doctors', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(data => {

                            toast.success(`Doctor ${doctor.name} added successfully`)
                            navigate('/dashboard/manageDoctors')
                        })
                }
            })
    }
    return (
        <div className=' w-11/12 '>
            <div className=''>
                <h2 className='text-2xl ml-2'>Add A Doctor</h2>
            </div>
            <div className=' w-96 p-7 shadow-md'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name",
                                { required: "Name is Required" }
                            )}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.name &&
                            <small className='text-red-500 mt-1 font-semibold'>{errors.name.message}</small>
                        }
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email",
                                { required: "Email is Required" }
                            )}
                            className="input input-bordered w-full max-w-xs" />
                        {
                            errors.email &&
                            <small className='text-red-500 mt-1 font-semibold'>{errors.email.message}</small>
                        }
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Specialty</span></label>

                        <select
                            {...register("specialty")}
                            className="select input-bordered w-full max-w-xs">
                            {
                                specialties.map(specialty => <option

                                    key={specialty._id}>{specialty.name}</option>)
                            }
                        </select>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="file"
                            {...register("image",
                                { required: "Image is Required" }
                            )}
                            className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                        {
                            errors.img &&
                            <small className='text-red-500 mt-1 font-semibold'>{errors.img.message}</small>
                        }
                    </div>

                    <input className='btn btn-accent w-full mt-5' value="Add Doctor" type="submit" />

                </form>
            </div>
        </div>
    );
};
/**
 *  Three place to store image
 * 1. third party image hosting server
 * 2. File system of your server  (Ex, AWS)
 * 3. MongoDb or others database   (Ex; base 64 system)
 */
export default AddDoctor;
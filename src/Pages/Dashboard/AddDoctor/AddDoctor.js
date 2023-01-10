import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { data: specialties = [], isLoading } = useQuery({
        queryKey: ["specialty"],
        queryFn: async () => {
            const res = await fetch("http://localhost:4000/appointmentSpecialty");
            const data = await res.json();
            return data
        }
    })
    console.log(specialties);

    const handleAddDoctor = data => {
        console.log(data);

    }
    return (
        <div className=' w-11/12 '>
            <div className=''>
                <h2 className='text-2xl'>Add A Doctor</h2>
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
                            {...register("specialty"
                            )}
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
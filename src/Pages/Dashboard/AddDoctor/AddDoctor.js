import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
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

                        <select className="select select-ghost w-full max-w-xs">
                            <option>Pick the </option>
                            <option>Svelte</option>
                            <option>Vue</option>
                            <option>React</option>
                        </select>

                    </div>

                    <input className='btn btn-accent w-full mt-5' value="Add Doctor" type="submit" />

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;
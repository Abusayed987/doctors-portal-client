import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { createUser, googleLogin, updateUser } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSignUp = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch((err) => {
                        console.error(err)
                    })
                toast.success('Successfully created!');
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })
    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
            })
            .then(err => console.error(err))

    }

    return (
        <div className='flex justify-center items-center h-[600px] '>
            <div className=' w-96 p-7 shadow-md'>
                <h1 className=' text-xl text-center mb-5'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
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
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is Required",
                                    minLength: { value: 6, message: "Password must be 6 characters or longer" }

                                })} className="input input-bordered w-full max-w-xs" />
                        {
                            errors.password &&
                            <small className='text-red-500 mt-1 font-semibold'>{errors.password.message}</small>
                        }
                    </div>

                    <input className='btn btn-accent w-full mt-5' value="Sign Up" type="submit" />

                </form>
                <p className='mt-3 text-sm text-center'>Already Have An Account ?
                    <Link to='/login' className='text-secondary'>Please Login</Link>
                </p>

                <div className="divider mt-4 text-sm">OR</div>

                <button onClick={handleGoogleLogin} className="btn btn-outline mt-5  rounded w-full " >CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default SignUp;
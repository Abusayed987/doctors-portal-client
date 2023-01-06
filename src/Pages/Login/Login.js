import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState('');

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        login(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully login!');
                navigate(from, { replace: true })
            })
            .catch(error => {
                setLoginError(error.message)
                console.error(error)
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
                <h1 className=' text-xl text-center mb-5'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError &&
                            <p className='text-red-600 font-semibold mt-2'>{loginError} asff</p>
                        }
                    </div>
                </form>
                <p className='mt-3 text-sm text-center'>New to Doctors Portal?
                    <Link to='/signup' className='text-secondary'> Create new account</Link>
                </p>

                <div className="divider mt-4 text-sm">OR</div>

                <button onClick={handleGoogleLogin} className="btn btn-outline mt-5  rounded w-full " >CONTINUE WITH GOOGLE</button>
            </div>

        </div>
    );
};

export default Login;
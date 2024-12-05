import Image from 'next/image';
import genericUser from '../../../../public/generic_user.png';
import Link from 'next/link';

const Login = () => {
    return (
        <div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-x-8">
                <div className="bg-sky-900 shadow-md rounded-md p-6">
                    <Image 
                        className='mx-auto h-16 w-auto rounded-full'
                        src={genericUser}
                        alt='user'
                    />
                    <h2 className='my-3 text-center text-3xl font-bold tracking-tight text-white'>Login</h2>
                    <form className='space-y-6'>
                        <div>
                            <label className='block text-sm font-medium text-gray-200'>Email</label>
                            <div className='mt-1'>
                                <input type="email" name="" id="" required 
                                    className='px-2 py-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-200 
                                    focus:outline-none focus:ring-sky-300 sm:text-sm'
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-200'>Password</label>
                            <div className='mt-1'>
                                <input type="password" name="" id="" required 
                                    className='px-2 py-3 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-200 
                                    focus:outline-none focus:ring-sky-300 sm:text-sm'
                                />
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Aceptar
                            </button>
                        </div>
                        <h2 className='my-3 text-center text-sm  text-white'>
                            <Link href='/register'>
                                Registrarse
                            </Link>
                        </h2>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
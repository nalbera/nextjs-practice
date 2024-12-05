import Image from "next/image";
import imgLanding from "../../public/img-landing.png";

export default function Landing() {
  return (
    <div className="py-28">
    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover bg-black">
            <Image className="mt-12 opacity-35" src={imgLanding} alt="imagen" />
        </div>
        <div className="w-full p-2 lg:w-1/2 bg-slate-600">
            <div className="mt-0">
                <h2 className=" text-slate-300">Bienvenido</h2>
            </div>
            <div className="mt-4">
                <label className="block  text-slate-300 text-sm font-bold mb-2">Email</label>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                </div>
                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div className="mt-8">
                <button className="bg-gray-700 text-slate-300 font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <a href="#" className="text-xs text-slate-300 uppercase">o registrarse</a>
                <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
        </div>
    </div>
    </div>
  );
}

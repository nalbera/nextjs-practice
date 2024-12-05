import Image from "next/image";
import imgPortada from '../../public/img_portada.jpg';
import Link from "next/link";

export default function Landing() {
  return (
    <>
      <section className="bg-sky-900 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-white font-sans font-bold text-5xl leading-tight mb-6">
                Electronic E-Shop
              </h1>
              <p className="text-white text-xl mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                sapiente. Nulla sunt blanditiis sapiente? Expedita distinctio
                consequuntur alias, maiores ut unde, cumque, ipsam deserunt ipsa
                perferendis ratione. Sint, necessitatibus dolor.
              </p>
              <Link href="/home" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 transition duration-200">
                Entrar al Shop
              </Link>
            </div>
            <div className="md:w-1/2">
                <Image
                    className="w-full rounded-lg shadow-lg" 
                    src={imgPortada}
                    alt="imagen"
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

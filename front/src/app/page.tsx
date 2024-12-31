import Image from "next/image";
import imgPortada from "../../public/img_portada.jpg";
import Link from "next/link";
import smartPhone from "../../public/smartphone.jpg";
import laptop from "../../public/laptop.jpg";
import tablet from "../../public/tablet.jpg";

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
              <Link
                href="/home"
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-700 transition duration-200"
              >
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
      <section className="p-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Categorías principales
          </h2>

          {/* smartphones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="w-full h-64 object-cover"
                src={smartPhone}
                alt="smart-phone"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Smatrphones
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam, aut consequuntur porro sed amet mollitia cum numquam
                  soluta officiis.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    Desde $999.99
                  </span>
                </div>
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}

            {/* laptops */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="w-full h-64 object-cover"
                src={laptop}
                alt="laptop"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Laptops
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident nisi laborum omnis ipsam possimus tempora, suscipit,
                  vel minima fugiat.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    Desde $888.88
                  </span>
                </div>
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}

            {/* tablet */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                className="w-full h-64 object-cover"
                src={tablet}
                alt="tablet"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Tablets
                </h3>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Optio beatae placeat earum nostrum ab, saepe accusantium.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-medium">
                    Desde $888.88
                  </span>
                </div>
              </div>
            </div>
            {/* ------------------------------------------ */}
          </div>
        </div>
      </section>
    </>
  );
}

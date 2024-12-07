"use client"

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="content flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8  bg-cover bg-center bg-no-repeat">
      <style jsx>{`
        .content {
          background-image: url("${process.env.NEXT_PUBLIC_URL}/img_portada.jpg");
        }
      `}
      </style>
      <div className="max-w-md mx-auto text-center p-8 rounded-lg shadow-lg bg-slate-300">
          <div className="text-9xl font-bold text-indigo-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Ooops! Página no encontrada</h1>
          <p className="text-lg text-black mb-8">
              La página que estás buscando parece haber emprendido una pequeña aventura. No te preocupes, te ayudaremos a encontrar el camino de regreso a casa.
          </p>
          <Link href="/home" className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Volver a Home
          </Link>
      </div>
    </div>
  )
}

export default NotFound;
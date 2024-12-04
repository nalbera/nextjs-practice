import Image from "next/image";
import imgLanding from '../../public/img-landing.png';

export default function Landing() {
  return (
    <main>
      <h1>Soy la landing</h1>
      <Image 
          src={imgLanding}
          alt="imagen"
          width={500}
          height={300}
      />
    </main>
  );
}

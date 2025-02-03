import Image from "next/image";
import FooterCard from "./FooterCard";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CustomButton from "../Buttons/CustomButton";
import { IoIosMail } from "react-icons/io";
import { FaInstagram, FaPinterest } from "react-icons/fa";
import SocialMediaList from "../SocialMedia/SocialMediaList";
import Link from "next/link";

export default function Footer() {
  const socialNetworks = [
    {
      name: "Instagram",
      icon: <FaInstagram size={"20px"} color="white" />,
      link: "https://www.instagram.com/conscientemente.ba/"
    },
    {
      name: "Pinterest",
      icon: <FaPinterest size={"20px"} color="white" />,
      link: "https://www.instagram.com/conscientemente.ba/"
    }
  ]

  return (
    <div className="p-2">
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="md:col-span-1 flex flex-col space-y-2">
          <FooterCard 
            title="Inicia tu viaje anual de autoconocimiento"
            description="Con nuestro diario de autoconocimiento"
            buttonText="Comenzar"
            buttonLink="https://conscientemente2.mitiendanube.com/productos/un-ano-contigo-diario-de-introspeccion/"
            icon={HiOutlineArrowNarrowRight}
            imageSrc="/images/journal-footer.jpeg"
          />
          <FooterCard 
            title="Artículos disponibles"
            description="78"
            imageSrc="/images/stock-photo-3.jpg"
            variant="variant1"
          />
        </div>
        <div className="md:col-span-2">
          <FooterCard 
            title="Lorem ipsum lorem ipsum lorem lorem ipsum lorem ipsum"
            imageSrc="/images/stock-photo-2.jpg"
            variant="variant2"
          />
        </div>
      </div> */}
      {/* Footer */}
      <div className="bg-black mt-2 h-auto rounded-lg p-4 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-46">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image 
              src={"/images/logo.jpeg"} 
              className="rounded-full"
              width={50}
              height={50}
              alt='ConscientementeBA Logo'
            />
            <h1 className="font-bold text-xl md:text-2xl text-white">
              Consciente Mente
            </h1>
          </div>
          <div className="text-white font-semibold">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-white font-semibold">Páginas</span>
          <Link href={"/"} className="text-white/55 hover:text-green-300 hover:font-semibold transition-all">
            <span>Home</span>
          </Link>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-white font-semibold">Legal</span>
          <Link href={"/terminos-y-condiciones"} className="text-white/55 hover:text-green-300 hover:font-semibold transition-all">
            <span>Términos y Condiciones</span>
          </Link>
          <Link href={"/politicas-de-privacidad"} className="text-white/55 hover:text-green-300 hover:font-semibold transition-all">
            <span>Póliticas de Privacidad</span>
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-white font-semibold">Contacto</span>
          <a href="mailto:fantinmercedes@gmail.com">
            <CustomButton 
              text="Contactar"
              wrapperClassName="h-12 w-full md:w-auto rounded-xl mt-2"
              className="rounded-xl text-white"
              icon={IoIosMail}
            />
          </a>
          <SocialMediaList />
        </div>
      </div>
    </div>
  );
}
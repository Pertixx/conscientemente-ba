import { FaInstagram, FaPinterest } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type VariantType = {
  variant?: "navbar" | "footer";
};

export default function SocialMediaList({ variant = "footer" }: VariantType) {
  const socialNetworks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      link: "https://www.instagram.com/conscientemente.ba/"
    },
    {
      name: "Pinterest",
      icon: FaPinterest,
      link: "https://www.instagram.com/conscientemente.ba/"
    }
  ]

  const getVariantStyles = () => {
    if (variant === "navbar") {
      return {
        background: "bg-gray-700 text-white hover:text-green-300",
      };
    } else if (variant === "footer") {
      return {
        background: "bg-gray-800 text-white hover:text-green-300",
      };
    }
  }

  const variantStyles = getVariantStyles();

  return (
    <ul className="flex gap-2">
      {
        socialNetworks.map((social, index) => (
          <a key={index} href={social.link} target="_blank">
            <li className={twMerge(variantStyles?.background, "h-[45px] w-[45px] flex items-center justify-center rounded-full")}>
              <social.icon size={"20px"} />
            </li>
          </a>
        ))
      }
    </ul>
  )
};
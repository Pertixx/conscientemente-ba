import Image from 'next/image';
import CustomButton from '../Buttons/CustomButton';
import { twMerge } from 'tailwind-merge';
import { ElementType } from 'react';

type ImageVariant = "default" | "variant1" | "variant2";

interface FooterCardProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  icon?: ElementType;
  imageSrc: string;
  variant?: ImageVariant;
}

export default function FooterCard({ 
  title, 
  description, 
  buttonText, 
  buttonLink, 
  icon: Icon,
  imageSrc,
  variant = 'default'
 }: FooterCardProps) {

  const getVariantClasses = (variant: ImageVariant) => {
    switch (variant) {
      case 'variant2':
        return {
          image: "object-cover rounded-lg",
          card: "h-[458px] rounded-lg",
          title: "text-white",
          description: "text-white/55",
          textWrapper: "left-1/2 transform -translate-x-1/2 top-1/2 text-center z-[3]",
          overlay: "rounded-lg"
        };
      case 'variant1':
        return {
          image: "object-cover rounded-lg",
          card: "h-[200px] rounded-lg",
          title: "text-white",
          description: "text-white/55",
          textWrapper: "left-0 right-0 bottom-2 p-4 z-[3]",
          overlay: "rounded-lg"
        };
      default:
        return {
          image: "object-cover blur-sm rounded-lg",
          card: "h-[250px] rounded-lg",
          title: "text-black",
          description: "text-black/55",
          textWrapper: "left-0 right-0 bottom-2 p-4"
        };
    }
  };

  const variantClasses = getVariantClasses(variant);

  return (
    <div className={twMerge(variantClasses.card, "relative")}>
      {
        variant !== 'default' && (
          <div className={twMerge(variantClasses.overlay, 'absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[2]')} />
        )
      }
      <Image 
        src={imageSrc}
        className={variantClasses.image}
        alt='ConscientementeBA Footer Image'
        fill
      />
      <div className={twMerge(variantClasses.textWrapper, 'absolute w-3/5')}>
        <h1 className={twMerge(variantClasses.title, 'font-bold text-2xl')}>
          {title}
        </h1>
        <p className={twMerge(variantClasses.title, 'text-sm mt-1')}>
          {description}
        </p>
        {
          buttonText && (
            <a 
              href={buttonLink}
              target="_blank"
            >
              <CustomButton 
                text={buttonText} 
                wrapperClassName="h-12 w-full md:w-auto rounded-xl mt-2"
                className="rounded-xl text-white"
                icon={Icon}
              />
            </a>
          )
        }
      </div>
    </div>
  )
}
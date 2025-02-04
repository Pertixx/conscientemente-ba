"use client";
import Image from 'next/image';

export default function Hero() {
  const handleButtonClick = () => {
    const element = document.getElementById('articles-list-container');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className='relative flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover'>
      <Image 
        src={"/images/stock-photo-1.jpg"} 
        className="object-cover"
        alt='ConscientementeBA Logo'
        fill
        priority
      />
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]' />
      <div className='relative z-[2] text-white p-5 text-center top-4'>
        <h2 className='text-2xl md:text-6xl font-bold'>
          Consciente Mente
        </h2>
        <p className='py-5 text-2xl'>
          Fomentando el hábito de habitarte
        </p>
        <button 
          onClick={handleButtonClick}
          className='px-8 py-2 border rounded-3xl text-2xl hover:bg-white hover:text-black duration-300'
        >
          Leer
        </button>
      </div>
    </div>
  );
}
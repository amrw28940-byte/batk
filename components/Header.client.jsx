"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const SnowBackground = dynamic(() => import('./SnowBackground'), { ssr: false });

export default function Header() {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const fullText = "بيتك هدفنا صحة بيتك";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full bg-orange-600 border-[6px] border-black shadow-[0_10px_0_rgba(0,0,0,0.5)] rounded-2xl mt-4 max-w-7xl mx-auto overflow-visible">
      <SnowBackground />
      
      <div className="relative z-10 px-4 py-4">
        {/* صف اللوجو والايقونات (ثابت في الموبايل والكمبيوتر) */}
        <div className="flex justify-between items-center">
          <button className="md:hidden text-white text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <Image src="/betakk.png" alt="Logo" width={100} height={50} className="object-contain md:w-[140px]" />
          
          <div className="flex items-center gap-2">
            {[ "/WhatsApp.webp", "/Facebook.png", "/Shopping cart.png" ].map((src, idx) => (
              <a key={idx} href="#" className="p-2 bg-white rounded-full border-2 border-black">
                <Image src={src} alt="icon" width={20} height={20} />
              </a>
            ))}
          </div>
        </div>

        {/* النص يظهر هنا للجميع */}
        <div className="text-center text-white font-extrabold text-xl md:text-3xl py-2">
          {text}
        </div>

        {/* الخط الفاصل */}
        <div className="border-t-2 border-black/20 my-2"></div>

        {/* القائمة والبحث */}
        {/* في الموبايل: تظهر القائمة فقط عند الضغط، في الكمبيوتر: تظهر دائماً */}
        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-between items-center gap-4 py-2`}>
          
          {/* البحث (ظاهر دائماً في الموبايل والكمبيوتر) */}
          <div className="relative w-full md:max-w-xs order-1 md:order-2">
            <input type="text" placeholder="ابحث..." className="w-full px-4 py-2 rounded-full border-2 border-black bg-white text-black text-sm focus:outline-none" />
            <FaSearch className="absolute left-4 top-2.5" />
          </div>

          {/* الروابط */}
          <ul className="flex flex-col md:flex-row gap-4 font-bold text-white text-lg order-2 md:order-1 text-center">
            <li className="cursor-pointer hover:underline">الرئيسية</li>
            <li className="cursor-pointer hover:underline">من نحن</li>
            <li className="cursor-pointer hover:underline">المنتجات</li>
            <li className="cursor-pointer hover:underline">اتصل بنا</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
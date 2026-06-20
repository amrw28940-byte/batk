"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';

const SnowBackground = dynamic(() => import('./SnowBackground'), { ssr: false });

export default function Header() {
  const [text, setText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const fullText = "بيتك هدفنا صحة بيتك";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setIsDone(true);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    // التعديل: border-[6px] border-black يحيط بالهيدر كاملاً مع الحواف الدائرية
    <header className="relative w-full bg-orange-600 border-[6px] border-black shadow-[0_10px_0_rgba(0,0,0,0.5)] rounded-2xl mt-4 max-w-7xl mx-auto min-h-[220px] overflow-hidden">
      
      <SnowBackground />
      
      <div className="relative z-10 container mx-auto px-8">
        {/* الصف العلوي */}
        <div className="flex justify-between items-center py-6">
          <Image src="/betakk.png" alt="Logo" width={140} height={70} className="object-contain" />
          
          <div className={`text-white font-extrabold text-3xl ${isDone ? "animate-pulse" : ""}`}>
            {text}
          </div>
          
          {/* الأيقونات الدائرية باللون الأبيض */}
          <div className="flex items-center gap-4">
            {[ 
              { src: "/WhatsApp.webp", alt: "واتساب" },
              { src: "/Facebook.png", alt: "فيسبوك" },
              { src: "/Shopping cart.png", alt: "عربة التسوق" }
            ].map((item, idx) => (
              <a key={idx} href="#" className="p-3 bg-white rounded-full hover:bg-gray-100 transition-all border-2 border-black">
                <Image src={item.src} alt={item.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        {/* الصف السفلي (القائمة والبحث) */}
        <nav className="flex justify-between items-center py-5 border-t-[4px] border-black/20">
          <ul className="flex gap-8 font-bold text-white text-lg">
            <li className="cursor-pointer hover:underline underline-offset-8">الرئيسية </li>
            <li className="cursor-pointer hover:underline underline-offset-8">من نحن</li>
            <li className="cursor-pointer hover:underline underline-offset-8">المنتجات</li>
            <li className="cursor-pointer hover:underline underline-offset-8">اتصل بنا</li>
          </ul>

          <div className="relative w-full max-w-sm">
            <input 
              type="text" 
              placeholder="ابحث عن منتجاتك المميزة..." 
              className="w-full pl-4 pr-12 py-3 rounded-full border-[3px] border-black bg-white text-black text-sm focus:outline-none" 
            />
            <svg className="absolute left-4 top-3 text-black" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </nav>
      </div>
    </header>
  );
}
"use client";
import { motion } from "framer-motion";

export default function SnowBackground() {
  // زيادة العدد 5 أضعاف (75 * 5 = 375)
  const particles = [...Array(375)];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((_, i) => {
        // كل 5 عناصر نجمة واحدة (نسبة متوازنة)
        const isStar = i % 5 === 0; 
        
        return (
          <motion.div
            key={i}
            className={`absolute ${isStar ? "text-yellow-400" : "bg-white rounded-full opacity-50"}`}
            initial={{ 
              y: -20, 
              // استخدام النطاق الصحيح من 0 إلى 100%
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ y: "250px" }} 
            transition={{
              duration: Math.random() * 5 + 7, // سرعة سقوط متنوعة
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10, // تأخير عشوائي للبداية
            }}
            style={{ 
              width: isStar ? 16 : 4, 
              height: isStar ? 16 : 4,
            }}
          >
            {isStar ? "★" : ""}
          </motion.div>
        );
      })}
    </div>
  );
}
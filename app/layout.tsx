import './globals.css';
import Header from "@/components/Header.client";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* طبقة النجوم التي ستتحرك فوق الخلفية البرتقالية */}
        <div className="stars-container"></div>
        
        {/* المحتوى */}
        <div className="relative z-10">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
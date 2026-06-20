import Image from 'next/image';
import { FaShieldAlt, FaTruck, FaHeadset, FaAward, FaStar, FaWhatsapp, FaPhone, FaFacebook, FaInstagram } from 'react-icons/fa';

const products = [
  { name: "وسادة تصحيح العمود الفقري العنقي", image: "/Cervical Spine Correction Pillow.jpg" },
  { name: "وسادة نوم طبية من إسفنج الذاكرة", image: "/High-quality medical sleeping pillow made of American memory foam.png" },
  { name: "وسادة تصحيح العمود الفقري", image: "/spinal correction pillow.png" },
  { name: "وسادة فليك لدعم الرقبة", image: "/Flick neck support pillow.png" },
  { name: "مخدة طبية ميموري فوم أمريكي", image: "/High-quality American memory foam medical pillow.jpg" },
  { name: "وسادة رقبة بتصميم مبطن", image: "/Padded neck pillow.png" },
  { name: "وسادة جل من رغوة الذاكرة", image: "/Memory foam gel pillow.webp" },
  { name: "مخدة الميموري فوم واللاتكس", image: "/Memory foam and natural latex pillow.webp" },
  { name: "مخدة سرير طبية ميموري فوم", image: "/American-style memory foam medical bed pillow.jpg" },
  { name: "وسادة ميكروفايبر بديل الداون", image: "/Microfiber pillow alternative to Down syndrome.webp" },
];

const whyUs = [
  { title: "جودة مضمونة", desc: "منتجات طبية بمعايير عالمية.", icon: <FaShieldAlt className="text-orange-600 text-3xl" /> },
  { title: "شحن سريع", desc: "توصيل لجميع المحافظات.", icon: <FaTruck className="text-orange-600 text-3xl" /> },
  { title: "دعم 24/7", desc: "فريقنا معك دائماً.", icon: <FaHeadset className="text-orange-600 text-3xl" /> },
  { title: "أفضل سعر", desc: "راحة تليق بك وبميزانيتك.", icon: <FaAward className="text-orange-600 text-3xl" /> },
];

const reviews = [
  { name: "أحمد علي", comment: "منتج ممتاز فعلاً ساعدني في التخلص من آلام الرقبة!", stars: 5 },
  { name: "سارة محمود", comment: "خدمة توصيل سريعة والمنتج خاماته أمريكية أصلية.", stars: 5 },
  { name: "خالد إبراهيم", comment: "تجربة شراء رائعة، المخدة مريحة جداً أثناء النوم.", stars: 4 },
  { name: "منى حسن", comment: "السعر ممتاز مقارنة بالجودة العالية، أنصح بالتعامل معهم.", stars: 5 },
  { name: "ياسر كمال", comment: "تغيرت جودة نومي تماماً بعد استخدام وسادة الميموري فوم.", stars: 5 },
];

export default function Home() {
  return (
    <main className="p-4 space-y-16">
      {/* 1. سكشن الفيديو */}
      <section className="max-w-7xl mx-auto mt-4 glass-effect rounded-3xl p-4">
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border-[6px] border-black shadow-[0_10px_0_rgba(0,0,0,0.5)] bg-black">
          <video className="w-full h-full object-cover opacity-90" autoPlay loop muted playsInline>
            <source src="/vidio.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-6">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4">بيتك.. في أمان معنا</h1>
            <p className="text-white/90 text-xl font-medium">نقدم لك أفضل الحلول لصحة وراحة بيتك بلمسة احترافية</p>
            <button className="mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full border-2 border-white transition-all transform hover:scale-105">تصفح المنتجات</button>
          </div>
        </div>
      </section>

      {/* 2. سكشن ليه تختار بيتك؟ */}
      <section className="max-w-7xl mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">ليه تختار "بيتك"؟</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <div key={i} className="glass-effect p-6 rounded-2xl text-center flex flex-col items-center hover:-translate-y-2 transition-all">
              <div className="bg-white p-3 rounded-full border-2 border-black mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. سكشن المنتجات */}
      <section className="max-w-7xl mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-12 text-white drop-shadow-lg">منتجاتنا المميزة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="glass-effect rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-all">
              <div className="relative w-full h-48 mb-4 border border-black rounded-lg overflow-hidden">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>
              <h3 className="text-md font-bold text-center h-12">{p.name}</h3>
              <button className="mt-4 w-full py-2 bg-black text-white rounded-lg hover:bg-orange-600 transition font-bold">شراء الآن</button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. سكشن مميزات منتجاتنا الطبية */}
      <section className="max-w-7xl mx-auto py-12 px-6 glass-effect rounded-3xl border-[6px] border-black">
        <h2 className="text-4xl font-extrabold text-center mb-12">مميزات منتجاتنا الطبية</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "تقنية الميموري فوم", desc: "تتشكل حسب انحناءات الجسم لدعم مثالي." },
            { title: "خامات مضادة للحساسية", desc: "أقمشة مسامية تمنع تراكم البكتيريا." },
            { title: "تصميم طبي متطور", desc: "تقليل الضغط على الفقرات وتوفير راحة قصوى." },
          ].map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-xl border-2 border-black hover:border-orange-600 transition-all text-center">
              <h3 className="text-2xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. سكشن آراء العملاء */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-white drop-shadow-lg">آراء عملائنا</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="glass-effect p-6 rounded-2xl border-[3px] border-black flex flex-col items-center text-center">
              <div className="flex text-orange-500 mb-3">
                {[...Array(r.stars)].map((_, n) => <FaStar key={n} />)}
              </div>
              <p className="text-gray-800 italic mb-4 flex-1">"{r.comment}"</p>
              <h4 className="font-bold text-lg">{r.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 6. سكشن اتصل بنا */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="glass-effect rounded-3xl p-10 border-[6px] border-black flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-right">
            <h2 className="text-4xl font-bold mb-4">جاهز لراحة أكبر؟</h2>
            <p className="text-lg text-gray-700">فريقنا متاح للرد على استفساراتك وتجهيز طلبك الآن.</p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a href="https://wa.me/201020347946" target="_blank" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">
              <FaWhatsapp className="text-2xl" /> تواصل عبر واتساب
            </a>
            <a href="tel:01020347946" className="flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 shadow-lg">
              <FaPhone className="text-xl" /> اتصل بنا الآن
            </a>
          </div>
        </div>
      </section>

      {/* 7. الفوتر */}
      <footer className="max-w-7xl mx-auto bg-black text-white rounded-t-3xl p-10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">
          <div>
            <h3 className="text-2xl font-bold text-orange-500 mb-4">بيتك</h3>
            <p className="text-gray-400">وجهتك الأولى للمنتجات الطبية والراحة المنزلية. جودة تليق بك.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-orange-500 transition">الرئيسية</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">المنتجات</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">سياسة الاستبدال</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">تابعنا</h3>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a href="#" className="hover:text-orange-500 transition"><FaFacebook /></a>
              <a href="#" className="hover:text-orange-500 transition"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} جميع الحقوق محفوظة لمتجر بيتك.
        </div>
      </footer>
    </main>
  );
}
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Metadata } from 'next';
export const metadata: Metadata = { title: 'About Compunnel | AI-driven Digital Transformation & Workforce Solutions', description: 'For over 25 years, Compunnel has been the trusted partner for Fortune 500 enterprises.' };
export default function AboutPage() {
  return (
    <><Navbar /><main>
      <section className="bg-[#020B2D] pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-white/10 border border-white/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0057FF]" />
            <span className="text-[#0057FF] text-xs font-bold tracking-widest uppercase">About Us</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>
            Powering Enterprise<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0057FF] to-[#00D4FF]">Transformation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">For over 25 years, Compunnel has been the trusted partner for Fortune 500 enterprises seeking to modernize their workforce, accelerate digital transformation, and secure their future.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#020B2D] mb-6" style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Founded in 1994, Compunnel is a leading provider of IT staffing, digital transformation, and cybersecurity services. Headquartered in Princeton, NJ, we serve over 200 global enterprises across industries including financial services, healthcare, manufacturing, and the public sector.</p>
            <p className="text-gray-600 leading-relaxed mb-4">We combine deep domain expertise with cutting-edge AI capabilities to deliver outcomes that matter â from placing specialized talent to building cloud-native platforms and securing enterprise environments.</p>
            <p className="text-gray-600 leading-relaxed">Our 2,000+ professionals operate across North America, India, and Europe, delivering value at global scale with local agility.</p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[{n:"2,000+",l:"Global Professionals"},{n:"200+",l:"Enterprise Clients"},{n:"25+",l:"Years of Excellence"},{n:"Top 50",l:"US Staffing Firm (SIA)"}].map(s=>(
              <div key={s.l} className="bg-[#F8FAFF] rounded-2xl p-8 text-center border border-gray-100">
                <div className="text-4xl font-black text-[#0057FF] mb-2" style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>{s.n}</div>
                <div className="text-sm text-gray-600 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#F8FAFF]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#020B2D] mb-4" style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Guided by a team of industry veterans committed to innovation, inclusion, and impact.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {name:"Ranjeet Dewal",title:"CEO & Co-Founder",img:"https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/03/15122110/RanjeetDewal.jpg"},
              {name:"Vivek Sharma",title:"President & Co-Founder",img:"https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/03/15122112/VivekSharma.jpg"},
              {name:"Sunil Sethi",title:"EVP â Talent Solutions",img:"https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/09/15095214/sunil-sethi.jpg"}
            ].map(p=>(
              <div key={p.name} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#020B2D]" style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>{p.name}</h3>
                  <p className="text-sm text-[#0057FF] font-medium mt-1">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-[#020B2D]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{fontFamily:"'Plus Jakarta Sans', sans-serif"}}>Certified. Recognized. Trusted.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">Our commitments to quality, security, and workplace culture are backed by independent certification bodies and industry analysts.</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              "https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09093040/SIA_2025_ListLogos_LargestStaffingFirms_US.webp",
              "https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2025/12/09094500/gptw-footer-logo2.webp",
              "https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/08/29120446/INC-5000-01.svg",
              "https://duvd8m7ocsflh.cloudfront.net/wp-content/uploads/2024/06/11103613/uspaac-logo.svg"
            ].map((img,i)=>(
              <div key={i} className="h-20 w-32 bg-white/5 rounded-xl p-3 flex items-center justify-center border border-white/10">
                <img src={img} alt="Award" className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main><Footer /></>
  );
}

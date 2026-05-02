import { Mail, Phone, MapPin, MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import Button from '../components/Button';

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  const faqs = [
    { q: 'When will my artisanal order ship?', a: 'Orders are typically processed within 3–5 business days. Because our products are handcrafted in small batches, please allow for slight variations in shipping times during high-demand periods.' },
    { q: 'Are all ingredients organic?', a: 'We source 100% wild-harvested or organic botanicals wherever possible. Each product page lists full ingredient transparency.' },
    { q: 'Do you offer international shipping?', a: 'Currently we ship to North America and Europe. We are working on expanding our botanical reach to more countries soon.' },
  ];

  return (
    <main className="pt-32 pb-32 max-w-7xl mx-auto px-6">
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-32">
        <div className="lg:col-span-5">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] text-primary mb-4 block">Contact Our Apothecary</span>
          <h1 className="font-serif text-5xl md:text-6xl text-on-surface mb-8">We’d love to hear from you.</h1>
          <p className="font-serif text-lg text-on-surface-variant max-w-md italic leading-relaxed">
            Whether you have questions about our artisanal steeping process or need guidance on choosing the right herbal oil for your ritual, our team is here to help.
          </p>
        </div>
        <div className="lg:col-span-7 rounded-3xl overflow-hidden aspect-video shadow-lg">
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIsK0eUtSgRq-jCq0c-byBw-MMAyrRyPNfnS50bosF-p78lFs9sAT_m4ObQJ8Cm0GVEwkDCAIiKzSQgr0VIEtw8cwS09dMtTzpKbiJJo1D_n3G-r2jcCSVJDq2Jkq_pdcjr8bjBW6O_Wwx-ZyqfdET2NfR9lt4LBzG3vJMQO6H-L4XdAVGRVfFU1FiAnSvbUW0p-Xz8Lz41ULoCdJ6VKoYyeNzSn4yik5w1oIyv2JmFsebkzYXRRuVHhZRIfV2d0YZrunZ5jSIp30" className="w-full h-full object-cover" />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-4">
            <h3 className="font-serif text-3xl text-on-surface">Reach Out</h3>
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-on-surface-variant">
                <Mail size={20} className="text-primary" />
                <span className="font-sans text-sm">hello@aetheriabotanical.com</span>
              </div>
              <div className="flex items-center gap-4 text-on-surface-variant">
                <Phone size={20} className="text-primary" />
                <span className="font-sans text-sm">+1 (555) 824-7389</span>
              </div>
              <div className="flex items-start gap-4 text-on-surface-variant">
                <MapPin size={20} className="text-primary mt-1" />
                <span className="font-sans text-sm">1248 Botanical Way, Suite 100<br />Ojai, California 93023</span>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-outline-variant/10">
            <h3 className="font-serif text-3xl text-on-surface mb-4">Instant Support</h3>
            <p className="font-sans text-sm text-on-surface-variant mb-8 leading-relaxed">For immediate assistance regarding order status, our WhatsApp concierge is available Mon–Fri, 9am–5pm PST.</p>
            <Button 
              className="w-full py-5 bg-[#25D366] hover:bg-[#20bd5a] shadow-green-200"
              leftIcon={<MessageCircle size={20} />}
            >
              Chat on WhatsApp
            </Button>
          </div>
        </div>

        <div className="lg:col-span-8 bg-surface-container-low p-12 md:p-16 rounded-3xl border border-stone-100">
           <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-outline">Full Name</label>
                  <input type="text" placeholder="Your name" className="w-full bg-white border border-outline-variant/30 rounded-full px-8 py-4 focus:outline-none focus:border-primary font-sans" />
                </div>
                <div className="space-y-2">
                  <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-outline">Email Address</label>
                  <input type="email" placeholder="example@email.com" className="w-full bg-white border border-outline-variant/30 rounded-full px-8 py-4 focus:outline-none focus:border-primary font-sans" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-sans text-[10px] font-bold uppercase tracking-widest text-outline">Message</label>
                <textarea rows={5} placeholder="How can we help you?" className="w-full bg-white border border-outline-variant/30 rounded-2xl px-8 py-6 focus:outline-none focus:border-primary font-sans"></textarea>
              </div>
              <Button type="submit" className="px-16 py-5 shadow-xl">
                 Send Inquiry
              </Button>
           </form>
        </div>
      </div>

      <section className="max-w-3xl mx-auto mt-32 py-24 border-t border-stone-100">
        <h2 className="font-serif text-4xl text-on-surface mb-16 text-center">Frequently Asked</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-stone-100 last:border-0 pb-6 mb-6">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center text-left py-4"
              >
                <span className="font-serif text-lg md:text-xl text-on-surface hover:text-primary transition-colors">{faq.q}</span>
                <ChevronDown className={cn("text-stone-300 transition-transform", openFaq === i ? "rotate-180" : "")} size={20} />
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 font-sans text-on-surface-variant leading-relaxed italic">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

import { Leaf, Droplets, History, Users } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-16 pb-32">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsXmIuRwFtzFHEXw84yszfRJYI5gUUzDpFdS8EdZQAZ40R-beqr8QQGPX_eenpD3JasPfniBTbB4UV_NbFigzL-PYtUPObtBbmovbNHKtqkJbItpTEuIJ87vCVMsTInrgl69tKK_w_WQVxVi9vp4WCoLaAS_5h3-M0dU1cjCWHXuU1NHJmag5cy2d9adugu5c6TmSWotxOf5uqDYoTNvHqM4LaPkKJQBq0CRTsJcIB4Vj1SyISqKXVZYUhshzrLIhcEgFOp5X18-g" 
          alt="Our Story" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/40 z-10"></div>
        <div className="relative z-20 text-center max-w-3xl px-6 text-white">
          <span className="font-sans text-[12px] font-semibold uppercase tracking-[0.3em] mb-4 block">Est. 2018</span>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">Our Story</h1>
          <p className="font-serif text-xl italic opacity-90 leading-relaxed">
            Born from a reverence for the earth’s quiet rhythms, Aetheria is a return to intentional beauty and botanical purity.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-primary mx-auto">
            <History size={32} />
          </div>
          <h3 className="font-serif text-2xl text-on-surface">Small Batches</h3>
          <p className="font-sans text-on-surface-variant leading-relaxed">Limited runs to ensure every bottle and bar receives focused attention. Quality over quantity, always.</p>
        </div>
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-primary mx-auto">
            <Droplets size={32} />
          </div>
          <h3 className="font-serif text-2xl text-on-surface">Natural Oils</h3>
          <p className="font-sans text-on-surface-variant leading-relaxed">Cold-pressed oils and pure extracts form our heart. No synthetic fragrances, ever.</p>
        </div>
        <div className="text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-primary mx-auto">
            <Leaf size={32} />
          </div>
          <h3 className="font-serif text-2xl text-on-surface">Sustainability</h3>
          <p className="font-sans text-on-surface-variant leading-relaxed">Compostable packaging and ethically sourced resins. Our footprint is light as a petal.</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-surface-container-low py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2 space-y-10">
            <span className="font-sans text-[12px] font-semibold text-primary uppercase tracking-[0.3em] block">The Art of Slowing Down</span>
            <h2 className="font-serif text-4xl text-on-surface">The Aetheria Process</h2>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
              Our soaps cure for six weeks in temperature-controlled cedar rooms. Our oils steep for two lunar cycles. This patience transforms simple ingredients into alchemy.
            </p>
            <div className="aspect-[16/9] rounded-3xl overflow-hidden shadow-sm">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBupdfJ7hRft9SjOnHu_Sx_nt8BrhZG-m5L017_W2hDr3sDdvIGnBZyBLNJ3y6QmJssBeSwHnDRt0cvAyigg4Wvbv5as2wh9E7VigeeGP2NJ_2uZ9IhOJeL_-TZxpXTqs4HOmZSSASqMoxGZZOyOpfme7f5-1WJmxiWxNZGZ5oVO7lrDAQHFor7RZxcc_TcYkKVVTXfz8lQCw2K78ThedFnZq0cnfeGf11QjXGuP4UtBnBtPYvTXbg9GHAEj95Cdt305Pu13SNQSk" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-sm">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSomNf-_-Avj6Ltpc0tP9MCJ88PnZwHT95eAHw6ihTYyJd8PitOHomAq4n-6F0bVEZcj0RJtseGRf3wUKSdqwIH_QdlEHQEzZ96NGQZzMXinlFuWKB9NqtYoRqTO6CB1t-ap3NHpO1UtIwZmyiXcKU2L7N1FcOWEdIl_vvHpnfU9uLZgYqxw8o7MDiWGZU_M4d5i4-3E3RMdtQN_nTFJWU3oI1o3VeRYjmT0k0WNKI0QOCDrfzLVPMd3FIpjR9KcflIPsBWb3uqnE" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-sm">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzF6rAD13PhxaMFvtadrA4PGCiICOqSpauWtnQy8nRoLXhUSGxxFCK5_98kLiT1HGMvGrnpcA7QQHpXshVAlUuDAMG7IHRXpiRspQ7PqH1ZYKHx5w27Yc9551u_IURHi4sMmD95LaLQfOHWho8GP8LzqL2MIqpgwHJCtHYqwuZPUEecV8yb74KXXkTIul0YfC2bVsiBTvlRzR7-ELmpkAN0uursF70YKVp7vAFUAbOWUObXF3gSjGwTkRmjVVFYZ6eOWzkSQCkkUo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

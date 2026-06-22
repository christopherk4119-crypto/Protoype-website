'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Wrench, Zap, Droplets, PaintBucket, Layers, Package, Home, TreePine,
  Phone, Mail, MapPin, Star, CheckCircle, Clock, Shield, ThumbsUp,
  ChevronDown, Menu, X, ArrowRight, ClipboardList, CalendarCheck, Hammer,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { WebGLShader } from '@/components/ui/web-gl-shader';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { LiquidButton } from '@/components/ui/liquid-glass-button';

// ── Data ──────────────────────────────────────────────────────────────────────

const SERVICES = [
  { icon: Wrench,      title: 'General Repairs',     desc: 'Fixing doors, windows, locks, hinges, and all the small jobs that add up fast.' },
  { icon: Zap,         title: 'Electrical Work',      desc: 'Outlet installation, light fixtures, ceiling fans, and switch replacements.' },
  { icon: Droplets,    title: 'Plumbing',             desc: 'Leaky faucets, toilet repairs, pipe fixes, and under-sink installations.' },
  { icon: PaintBucket, title: 'Painting & Finishing', desc: 'Interior & exterior painting, touch-ups, caulking, and wall prep.' },
  { icon: Layers,      title: 'Drywall & Plastering', desc: 'Hole patching, crack repair, texturing, and full drywall installation.' },
  { icon: Package,     title: 'Furniture Assembly',   desc: 'IKEA, flatpack, and office furniture assembled quickly and correctly.' },
  { icon: Home,        title: 'Flooring',             desc: 'Laminate, vinyl plank, tile installation, and hardwood repairs.' },
  { icon: TreePine,    title: 'Exterior & Decking',   desc: 'Deck repairs, fence fixes, caulking, weatherproofing, and gutter clearing.' },
];

const REASONS = [
  { icon: Shield,      title: 'Fully Insured',       desc: 'Liability insurance on every job — your home is protected.' },
  { icon: Clock,       title: 'On Time, Every Time', desc: 'We respect your schedule. No surprise no-shows.' },
  { icon: ThumbsUp,    title: 'Quality Guaranteed',  desc: "Not happy? We come back and make it right, no questions asked." },
  { icon: CheckCircle, title: 'Transparent Pricing', desc: 'Upfront quotes with no hidden fees or last-minute surprises.' },
];

const STEPS = [
  { icon: Phone,         step: '01', title: 'Call or Text Us',  desc: 'Reach out by phone, text, or the contact form and describe what needs fixing.' },
  { icon: ClipboardList, step: '02', title: 'Get a Free Quote', desc: 'We assess your job and give you a clear, upfront price — no obligation.' },
  { icon: CalendarCheck, step: '03', title: 'We Get It Done',   desc: 'Our team shows up on time, completes the work cleanly, and leaves you smiling.' },
];

const REVIEWS = [
  { name: 'Sarah M.',  location: 'Beltline',  rating: 5, text: 'AJ fixed three things in my condo in under two hours. Honest pricing and left the place spotless. Will definitely call again!' },
  { name: 'Dave R.',   location: 'Tuscany',   rating: 5, text: 'Had a leaky faucet and a broken fence gate. AJ handled both same day. Super professional and reasonably priced.' },
  { name: 'Linda K.',  location: 'Mahogany',  rating: 5, text: 'Assembled my entire IKEA bedroom set without a single complaint. Fast, friendly, and worth every penny.' },
  { name: 'James T.',  location: 'Mission',   rating: 5, text: 'Repaired my drywall after a water leak. The patch is completely invisible. Highly recommend AJ to anyone in Calgary!' },
  { name: 'Priya S.',  location: 'Evanston',  rating: 5, text: 'AJ painted our main floor and the results are stunning. He was tidy, fast, and the colour is exactly what we wanted.' },
  { name: 'Tom W.',    location: 'Killarney', rating: 5, text: 'Called on a Friday afternoon about a broken door lock. AJ was there Saturday morning. Amazing response time!' },
];

const AREAS = [
  'Downtown / Beltline', 'NW Calgary', 'NE Calgary', 'SW Calgary',
  'SE Calgary', 'Airdrie', 'Cochrane', 'Chestermere',
  'Okotoks', 'Strathmore', 'Tuscany', 'Evanston',
];

const NAV_LINKS = [
  { href: '#services',      label: 'Services' },
  { href: '#why-us',        label: 'Why Us' },
  { href: '#process',       label: 'How It Works' },
  { href: '#reviews',       label: 'Reviews' },
  { href: '#service-areas', label: 'Areas' },
  { href: '#contact',       label: 'Contact' },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Page() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [formData, setFormData]   = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-[#1E3A8A]/95 backdrop-blur-md shadow-lg shadow-blue-900/30' : 'bg-transparent'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 font-poppins font-bold text-white">
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F97316]">
              <Hammer size={18} className="text-white" />
            </span>
            <span className="text-xl">AJ&apos;s <span className="text-[#F97316]">Handyman</span></span>
          </a>

          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-white/80 hover:text-[#F97316] transition-colors text-sm font-medium font-opensans">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="tel:4031234567" className="hidden md:flex items-center gap-2 cta-btn text-white font-semibold font-poppins px-5 py-2.5 rounded-full text-sm">
            <Phone size={15} /> (403) 123-4567
          </a>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-[#1E3A8A]/98 backdrop-blur-md border-t border-white/10">
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setMenuOpen(false)} className="block text-white/90 hover:text-[#F97316] font-medium font-opensans py-1">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="tel:4031234567" className="flex items-center justify-center gap-2 cta-btn text-white font-semibold font-poppins px-5 py-3 rounded-full text-sm w-full mt-2">
                  <Phone size={15} /> (403) 123-4567
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* ── HERO (WebGL Shader background) ─────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Full-screen WebGL shader */}
        <WebGLShader />

        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#1E3A8A]/60 z-10" />

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 text-orange-300 text-sm font-medium font-opensans mb-6">
            <MapPin size={14} /> Serving Calgary &amp; Surrounding Areas
          </div>

          <h1 className="font-poppins font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
            Your Trusted Calgary
            <br />
            <span className="text-gradient">Handyman</span> Services
          </h1>

          <p className="text-white/80 text-lg md:text-xl font-opensans max-w-2xl mx-auto mb-10 leading-relaxed">
            From leaky faucets to full room makeovers — AJ&apos;s Handyman gets the job done right,
            on time, and on budget. No job is too small.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Liquid Glass CTA */}
            <LiquidButton
              size="xl"
              className="text-white border border-white/30 rounded-full font-poppins font-bold"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get a Free Quote <ArrowRight size={18} />
            </LiquidButton>

            <LiquidButton
              size="xl"
              className="text-white border border-white/20 rounded-full font-poppins font-semibold"
              onClick={() => { window.location.href = 'tel:4031234567'; }}
            >
              <Phone size={18} /> (403) 123-4567
            </LiquidButton>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[{ value: '500+', label: 'Jobs Done' }, { value: '5★', label: 'Avg Rating' }, { value: '10yr', label: 'Experience' }].map(s => (
              <div key={s.label} className="glass-card px-4 py-4 text-center">
                <div className="text-[#F97316] font-poppins font-bold text-2xl">{s.value}</div>
                <div className="text-white/70 text-xs font-opensans mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <a href="#showcase" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white/80 animate-bounce transition-colors">
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ── SCROLL SHOWCASE (ContainerScroll) ──────────────────────────── */}
      <section id="showcase" className="bg-slate-50 overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="mb-6">
              <span className="text-[#F97316] font-poppins font-semibold text-sm uppercase tracking-widest">
                Our Work
              </span>
              <h2 className="font-poppins font-bold text-[#1E3A8A] text-3xl md:text-5xl mt-3">
                Craftsmanship You Can See
              </h2>
              <p className="text-slate-600 font-opensans mt-3 max-w-xl mx-auto text-lg">
                Every job is treated with care and attention to detail — from the first nail to the final coat.
              </p>
            </div>
          }
        >
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80"
            alt="Professional handyman at work in a Calgary home"
            width={1400}
            height={720}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-poppins font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="font-poppins font-bold text-[#1E3A8A] text-3xl md:text-5xl mt-3 mb-4">Our Services</h2>
            <p className="text-slate-600 font-opensans max-w-xl mx-auto text-lg">One call covers it all. We handle the repairs so you don&apos;t have to.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="service-card glass-card-light p-6 group cursor-default">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] flex items-center justify-center mb-5 group-hover:bg-[#F97316] transition-colors duration-300">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-[#1E3A8A] text-lg mb-2">{title}</h3>
                <p className="text-slate-600 font-opensans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ──────────────────────────────────────────────── */}
      <section id="why-us" className="py-24 navy-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-poppins font-semibold text-sm uppercase tracking-widest">Why AJ&apos;s</span>
            <h2 className="font-poppins font-bold text-white text-3xl md:text-5xl mt-3 mb-4">Why Choose Us</h2>
            <p className="text-white/70 font-opensans max-w-xl mx-auto text-lg">Calgary homeowners trust AJ&apos;s because we deliver exactly what we promise.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REASONS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card p-8 text-center hover:bg-white/15 transition-colors duration-300">
                <div className="w-14 h-14 rounded-2xl bg-[#F97316] flex items-center justify-center mx-auto mb-5">
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-lg mb-3">{title}</h3>
                <p className="text-white/65 font-opensans text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────────────── */}
      <section id="process" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-poppins font-semibold text-sm uppercase tracking-widest">Simple Process</span>
            <h2 className="font-poppins font-bold text-[#1E3A8A] text-3xl md:text-5xl mt-3 mb-4">How It Works</h2>
            <p className="text-slate-600 font-opensans max-w-xl mx-auto text-lg">Getting your home fixed is as easy as 1-2-3.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="text-center group">
                <div className="relative inline-flex">
                  <div className="w-28 h-28 rounded-full bg-slate-50 border-2 border-[#1E3A8A]/10 flex items-center justify-center mx-auto mb-6 group-hover:border-[#F97316] group-hover:bg-orange-50 transition-all duration-300">
                    <Icon size={36} className="text-[#1E3A8A] group-hover:text-[#F97316] transition-colors duration-300" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#F97316] text-white font-poppins font-bold text-xs flex items-center justify-center">
                    {step}
                  </span>
                </div>
                <h3 className="font-poppins font-semibold text-[#1E3A8A] text-xl mb-3">{title}</h3>
                <p className="text-slate-600 font-opensans text-sm leading-relaxed max-w-xs mx-auto">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <a href="#contact" className="cta-btn inline-flex items-center gap-2 text-white font-bold font-poppins px-10 py-4 rounded-full text-base">
              Start Your Project <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ────────────────────────────────────────────────────── */}
      <section id="reviews" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-poppins font-semibold text-sm uppercase tracking-widest">Testimonials</span>
            <h2 className="font-poppins font-bold text-[#1E3A8A] text-3xl md:text-5xl mt-3 mb-4">What Calgarians Say</h2>
            <p className="text-slate-600 font-opensans max-w-xl mx-auto text-lg">Don&apos;t take our word for it — here&apos;s what our customers have to say.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map(({ name, location, rating, text }) => (
              <div key={name} className="review-card p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-[#F97316] text-[#F97316]" />
                  ))}
                </div>
                <p className="text-slate-700 font-opensans text-sm leading-relaxed mb-5">&ldquo;{text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-poppins font-bold text-sm">
                    {name[0]}
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-[#1E3A8A] text-sm">{name}</div>
                    <div className="text-slate-500 font-opensans text-xs">{location}, Calgary</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ──────────────────────────────────────────────── */}
      <section id="service-areas" className="py-24 navy-gradient">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[#F97316] font-poppins font-semibold text-sm uppercase tracking-widest">Coverage</span>
          <h2 className="font-poppins font-bold text-white text-3xl md:text-5xl mt-3 mb-4">Service Areas</h2>
          <p className="text-white/70 font-opensans max-w-xl mx-auto text-lg mb-12">We cover Calgary and the surrounding communities. Not sure if we reach you? Just call!</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {AREAS.map(area => (
              <div key={area} className="glass-card px-4 py-3 flex items-center gap-2">
                <MapPin size={14} className="text-[#F97316] flex-shrink-0" />
                <span className="text-white/90 font-opensans text-sm">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-white/50 font-opensans text-sm mt-8">+ many more communities within 50 km of Calgary</p>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[#F97316] font-poppins font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
            <h2 className="font-poppins font-bold text-[#1E3A8A] text-3xl md:text-5xl mt-3 mb-4">Request a Free Quote</h2>
            <p className="text-slate-600 font-opensans max-w-xl mx-auto text-lg">Tell us about your project and we&apos;ll get back to you within a few hours.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="glass-card-light p-8">
                <h3 className="font-poppins font-bold text-[#1E3A8A] text-xl mb-6">Contact Info</h3>
                {[
                  { icon: Phone,  label: 'Phone',    value: '(403) 123-4567',      href: 'tel:4031234567' },
                  { icon: Mail,   label: 'Email',    value: 'aj@ajhandymanyyc.ca', href: 'mailto:aj@ajhandymanyyc.ca' },
                  { icon: MapPin, label: 'Location', value: 'Calgary, AB & Area',  href: '#service-areas' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-start gap-4 mb-5 group">
                    <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316] transition-colors duration-300">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-opensans mb-0.5">{label}</div>
                      <div className="text-[#1E3A8A] font-poppins font-semibold text-sm">{value}</div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="glass-card-light p-6 text-center">
                <Clock size={28} className="text-[#F97316] mx-auto mb-3" />
                <h4 className="font-poppins font-semibold text-[#1E3A8A] mb-2">Working Hours</h4>
                <p className="text-slate-600 font-opensans text-sm">Mon–Fri: 7am – 7pm</p>
                <p className="text-slate-600 font-opensans text-sm">Sat: 8am – 5pm</p>
                <p className="text-slate-500 font-opensans text-xs mt-2">Emergency calls welcome</p>
              </div>
            </div>

            <div className="lg:col-span-3 glass-card-light p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h3 className="font-poppins font-bold text-[#1E3A8A] text-2xl mb-2">Message Sent!</h3>
                  <p className="text-slate-600 font-opensans">Thanks! We&apos;ll reach out within a few hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', service: '', message: '' }); }}
                    className="mt-6 text-[#F97316] font-poppins font-semibold text-sm underline underline-offset-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-poppins font-medium text-[#1E3A8A] mb-1.5">Full Name *</label>
                      <input
                        type="text" required value={formData.name}
                        onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 font-opensans text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-poppins font-medium text-[#1E3A8A] mb-1.5">Phone Number *</label>
                      <input
                        type="tel" required value={formData.phone}
                        onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 font-opensans text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none"
                        placeholder="(403) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-[#1E3A8A] mb-1.5">Email Address</label>
                    <input
                      type="email" value={formData.email}
                      onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 font-opensans text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-[#1E3A8A] mb-1.5">Service Needed *</label>
                    <select
                      required value={formData.service}
                      onChange={e => setFormData(p => ({ ...p, service: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 font-opensans text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none bg-white"
                    >
                      <option value="">Select a service…</option>
                      {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                      <option value="Other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-poppins font-medium text-[#1E3A8A] mb-1.5">Tell Us About the Job *</label>
                    <textarea
                      required rows={4} value={formData.message}
                      onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 font-opensans text-sm focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all outline-none resize-none"
                      placeholder="Describe what needs to be fixed or installed…"
                    />
                  </div>
                  <button type="submit" className="cta-btn w-full text-white font-bold font-poppins py-4 rounded-xl text-base flex items-center justify-center gap-2">
                    Send My Request <ArrowRight size={18} />
                  </button>
                  <p className="text-center text-slate-400 font-opensans text-xs">We respond within a few hours. No spam, ever.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <footer className="bg-[#172257] text-white">
        <div className="bg-[#F97316] py-8">
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-poppins font-bold text-white text-xl">Ready to fix it today?</p>
              <p className="text-orange-100 font-opensans text-sm">Call or text — we answer fast.</p>
            </div>
            <a href="tel:4031234567" className="flex items-center gap-2 bg-white text-[#F97316] font-poppins font-bold px-7 py-3 rounded-full hover:bg-orange-50 transition-colors">
              <Phone size={18} /> (403) 123-4567
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 font-poppins font-bold text-white mb-4">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#F97316]">
                  <Hammer size={18} className="text-white" />
                </span>
                <span className="text-xl">AJ&apos;s <span className="text-[#F97316]">Handyman</span></span>
              </div>
              <p className="text-white/60 font-opensans text-sm leading-relaxed max-w-xs mb-6">
                Calgary&apos;s trusted handyman service. We take pride in every job — big or small — and treat your home like our own.
              </p>
              <a href="tel:4031234567" className="flex items-center gap-2 text-white/70 hover:text-[#F97316] font-opensans text-sm transition-colors mb-2">
                <Phone size={15} /> (403) 123-4567
              </a>
              <a href="mailto:aj@ajhandymanyyc.ca" className="flex items-center gap-2 text-white/70 hover:text-[#F97316] font-opensans text-sm transition-colors">
                <Mail size={15} /> aj@ajhandymanyyc.ca
              </a>
            </div>

            <div>
              <h4 className="font-poppins font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                {SERVICES.map(s => (
                  <li key={s.title}>
                    <a href="#services" className="text-white/60 hover:text-[#F97316] font-opensans text-sm transition-colors">{s.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-poppins font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { href: '#why-us',        label: 'Why Choose Us' },
                  { href: '#process',       label: 'How It Works' },
                  { href: '#reviews',       label: 'Reviews' },
                  { href: '#service-areas', label: 'Service Areas' },
                  { href: '#contact',       label: 'Get a Quote' },
                ].map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="text-white/60 hover:text-[#F97316] font-opensans text-sm transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 font-opensans text-xs">
              &copy; {new Date().getFullYear()} AJ&apos;s Handyman Services Calgary. All rights reserved.
            </p>
            <p className="text-white/30 font-opensans text-xs">Calgary, Alberta, Canada</p>
          </div>
        </div>
      </footer>
    </>
  );
}

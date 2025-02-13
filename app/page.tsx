"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Navbar />
      <HeroSection />
      <ServicesPreview />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-extrabold">Our Website</h1>
        <ul className="flex space-x-8 text-lg">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          <li><Link href="/service" className="hover:text-gray-300">Services</Link></li>
        </ul>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="text-center py-32 bg-cover bg-center bg-[url('/hero-bg.jpg')] text-black shadow-lg">
      <motion.h1 className="text-6xl font-extrabold mb-6 drop-shadow-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Welcome to Our Website
      </motion.h1>
      <p className="text-xl mb-8 max-w-2xl mx-auto drop-shadow-lg">We provide high-quality digital solutions for your business. Let&apos;s build something amazing together!</p>
      <Link href="/service" className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition shadow-lg">Explore Services</Link>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-200 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Services</h2>
      <div className="flex justify-center space-x-8">
        <ServiceCard title="App Development" href="/service/app-development" />
        <ServiceCard title="Website Development" href="/service/website-development" />
      </div>
    </section>
  );
}

function ServiceCard({ title, href }: { title: string; href: string }) {
  return (
    <Link href={href} className="block bg-white shadow-xl p-8 rounded-lg hover:scale-105 transition transform duration-300 max-w-xs">
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-700">We provide high-quality {title} to boost your business.</p>
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center p-6 mt-10 shadow-inner">
      <p className="text-lg">&copy; 2024 Our Website. All Rights Reserved.</p>
    </footer>
  );
}

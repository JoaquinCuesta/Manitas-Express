
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    document.title = "Manitas Express - Reparaciones y Reformas en Elche";
  }, []);

  return (
    <main className="font-sans text-gray-800">
      <section className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-center px-4" style={{ backgroundImage: "url('/tools-bg.jpg')" }}>
        <Image src="/favicon.png" alt="Logo Manitas Express" width={80} height={80} className="mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Manitas Express</h1>
        <p className="text-lg md:text-xl text-white mt-4 drop-shadow-md">Reparaciones del hogar y reformas en Elche</p>
      </section>

      <section className="py-16 px-4 bg-gray-100" id="servicios">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <Card><CardContent className="p-6">🔧 Reparaciones pequeñas (grifos, enchufes, persianas, etc.)</CardContent></Card>
          <Card><CardContent className="p-6">🏗️ Reformas grandes (baños, cocinas, suelos, etc.)</CardContent></Card>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">¿Quiénes Somos?</h2>
          <p className="text-lg">Somos profesionales con experiencia en reparaciones y reformas, ofreciendo servicio rápido y de calidad en Elche y alrededores.</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-100" id="galeria">
        <h2 className="text-3xl font-semibold text-center mb-8">Trabajos Realizados</h2>
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          <Image src="/trabajo1.jpg" width={300} height={200} alt="Trabajo 1" className="rounded-lg shadow" />
          <Image src="/trabajo2.jpg" width={300} height={200} alt="Trabajo 2" className="rounded-lg shadow" />
          <Image src="/trabajo3.jpg" width={300} height={200} alt="Trabajo 3" className="rounded-lg shadow" />
        </div>
      </section>

      <section className="py-16 px-4" id="contacto">
        <h2 className="text-3xl font-semibold text-center mb-8">Contáctanos</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <Input placeholder="Nombre" required />
          <Input type="email" placeholder="Correo electrónico" required />
          <Textarea placeholder="Mensaje" rows={5} required />
          <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">Enviar</Button>
        </form>
        <div className="text-center mt-6">
          <a href="https://wa.me/34643547787" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-500 hover:bg-green-600 text-white">Contactar por WhatsApp</Button>
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} Manitas Express. Todos los derechos reservados.</p>
        <p>Tel: +34 643 54 77 87</p>
      </footer>
    </main>
  );
}

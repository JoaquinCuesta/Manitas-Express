import { useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export default function Home() {
  useEffect(() => {
    console.log("Sitio cargado");
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-800 p-4">
      <header className="text-center py-6">
        <img src="/favicon.png" alt="Logo Manitas Express" className="mx-auto w-16 h-16" />
        <h1 className="text-3xl font-bold mt-2">Manitas Express</h1>
        <p className="text-lg text-gray-600">Reparaciones del hogar y reformas en Elche</p>
      </header>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-2">Nuestros Servicios</h2>
        <ul className="list-disc pl-5">
          <li>🔧 Reparaciones pequeñas (grifos, enchufes, persianas, etc.)</li>
          <li>🏗️ Reformas grandes (baños, cocinas, suelos, etc.)</li>
        </ul>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-2">¿Quiénes Somos?</h2>
        <p>Somos profesionales con experiencia en reparaciones y reformas, ofreciendo servicio rápido y de calidad en Elche y alrededores.</p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-2">Trabajos Realizados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="/trabajo1.jpg" alt="Trabajo 1" className="rounded shadow" />
          <img src="/trabajo2.jpg" alt="Trabajo 2" className="rounded shadow" />
          <img src="/tools-bg.jpg" alt="Trabajo 3" className="rounded shadow" />
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
        <Card className="max-w-xl mx-auto">
          <CardContent className="flex flex-col gap-4 py-4">
            <Input placeholder="Nombre" />
            <Input type="email" placeholder="Correo electrónico" />
            <Textarea placeholder="Mensaje" />
            <Button>Enviar</Button>
            <a
              href="https://wa.me/34643547787"
              target="_blank"
              className="text-center text-green-600 underline"
            >
              Contactar por WhatsApp
            </a>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-10">
        © 2025 Manitas Express. Todos los derechos reservados. <br />
        Tel: +34 643 54 77 87
      </footer>
    </main>
  );
}

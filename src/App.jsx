
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ManitasExpress() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert('Mensaje enviado. Te contactaremos pronto.');
  };

  return (
    <main className="font-sans text-gray-800">
      <header className="bg-blue-700 text-white p-6 shadow">
        <h1 className="text-3xl font-bold">Manitas Express</h1>
        <p className="text-sm mt-2">Tu solución rápida para reparaciones y reformas en casa</p>
      </header>

      <section className="p-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Servicios</h2>
        <ul className="grid sm:grid-cols-2 gap-4">
          <li className="bg-white p-4 shadow rounded-xl">🔧 Reparaciones del día a día</li>
          <li className="bg-white p-4 shadow rounded-xl">🖌️ Pintura de interiores y exteriores</li>
          <li className="bg-white p-4 shadow rounded-xl">💡 Electricidad y fontanería</li>
          <li className="bg-white p-4 shadow rounded-xl">🛁 Reformas de baños y cocinas</li>
          <li className="bg-white p-4 shadow rounded-xl">🪵 Instalación de tarimas y carpintería</li>
        </ul>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Quiénes Somos</h2>
        <p className="bg-white p-4 shadow rounded-xl">
          En Manitas Express somos un equipo de profesionales listos para ayudarte con cualquier necesidad en el hogar, desde lo más simple hasta reformas completas. Calidad, rapidez y confianza.
        </p>
      </section>

      <section className="p-6 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
        <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-4 shadow rounded-xl max-w-md">
          <input type="text" name="nombre" placeholder="Tu nombre" onChange={handleChange} className="border p-2 rounded" required />
          <input type="email" name="email" placeholder="Tu email" onChange={handleChange} className="border p-2 rounded" required />
          <textarea name="mensaje" placeholder="¿En qué te ayudamos?" onChange={handleChange} className="border p-2 rounded" required />
          <Button type="submit">Enviar mensaje</Button>
        </form>
        <a href="https://wa.me/34600000000" target="_blank" className="block mt-4 text-blue-700">📱 O contáctanos por WhatsApp</a>
      </section>

      <footer className="bg-blue-700 text-white text-center p-4 mt-8">
        © {new Date().getFullYear()} Manitas Express – Todos los derechos reservados
      </footer>
    </main>
  );
}

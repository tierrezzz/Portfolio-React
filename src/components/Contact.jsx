import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
    const templateParams = {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
      date: new Date().toLocaleDateString('es-ES')
    };

    emailjs.send(
      'service_qwbqrcq', 
      'template_trbdx8f', 
      templateParams,
      'buOjySvtVHfmyGwTT'
    )
    .then((result) => {
      console.log('✅ Email enviado:', result.text);
      alert('Mensaje enviado correctamente');
      form.current.reset();
    })
    .catch((error) => {
      console.error('❌ Error:', error);
      alert('Error al enviar el mensaje');
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctame</h2>
        
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
          {/* Campo Nombre */}
          <div className="mb-4">
            <label htmlFor="from_name" className="block mb-2">Nombre *</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              required
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Campo Email */}
          <div className="mb-4">
            <label htmlFor="from_email" className="block mb-2">Email *</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              required
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Campo Mensaje */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2">Mensaje *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          {/* Botón Enviar */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
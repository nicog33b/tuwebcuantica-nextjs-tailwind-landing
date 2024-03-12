import { useRef } from 'react';
import './contact.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
    .sendForm('service_9ag4c8x', 'template_nkpxays', form.current, 'lkpa6Bm85yAOSRD5H')
    .then(
      (result) => {
        console.log('SUCCESS!', result.text);
        Swal.fire({
          icon: 'success',
          title: '¡Enviado!',
          text: 'Tu propuesta ha sido enviada con éxito.',
        });
        // Limpiar el formulario después de un envío exitoso
        form.current.reset();
      },
      (error) => {
        console.log('FAILED...', error.text);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al enviar tu propuesta. Inténtalo de nuevo más tarde.',
        });
      }
    );
};

  return (
    <div className='generalStyles'>
      <div className='containerP'>
        <div className='contact-box'>
          <div className='left'></div>
          <div className='right'>
            <h2 className='titleContact text-xl font-bold'>Manda tu propuesta</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='nombre' className='field rounded' placeholder='Tu nombre' required />
              <input type='email' name='email' className='field rounded' placeholder='Tu email' required />
              <input type='number' name='numero' className='field rounded' placeholder='Tu numero' required />
              <textarea name='mensaje' className='field area rounded' placeholder='Tu mensaje' required></textarea>
              <input type='submit' className='btn rounded-full text-white font-bold' value='Enviar' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

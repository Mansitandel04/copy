import React from 'react';

const Contactus = () => {
  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md mt-[100px]'>
        <h2 className='heading text-center'>Contact Us</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text_para'>Got a technical issue? Want to send feedback about a feature? Let us know.</p>
        <form action='#' className='space-y-8 '>
          <div>
            <label htmlFor='email' className='form__label'>
             Your Email:
             <input  required
             type='email' id='email' placeholder='example@gmail.com' className='form__input mt-3'></input>
            </label>
          </div>
          <div>
            <label htmlFor='subject' className='form__label'>
            Subject:
             <input type='text' id='subject' placeholder='Let Us know how we can help you' className='form__input mt-3'></input>
            </label>
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='form__label'>
            Your message:
             <textarea type='text' id='message' placeholder='Leave a comment......' rows='6'className='form__input mt-3'></textarea>
            </label>
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>Submit</button>
          </form>
      </div>
      
    </section>
  );
}

export default Contactus;


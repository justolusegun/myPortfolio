import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import './form.css'





export const Form = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_f1oc3vs', 'template_hhagvih', form.current, 'KHLhvPpupwWd-lHWk')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <form  ref={form} onSubmit={sendEmail} className='form' >
    <div className="form_input">
        <input type="text" placeholder='Your Name' name='user_name'/>
    </div>
    <div className="form_input">
        <input type="email" placeholder='Your Email' name='user_email'/>
    </div>

    <div className="form_input">
        <textarea rows="10" placeholder='Write Message' name='message'></textarea>
    </div>

    <button className='submit_btn' type='submit' value="Send">
            Submit
        </button>
</form>
  )
}

export default Form
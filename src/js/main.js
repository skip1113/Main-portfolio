// import emailjs from 'emailjs-com'
// import apiKeys from './apikeys'


const sendEmail = e => {
  e.preventDefault()
  var template_params = {
    "name": formdata.name,
    "email": formdata.email,
    "notes": formdata.message
  }
  var service_id = "gmail";
  var template_id = "contact_page";
  window.emailjs.send(service_id, template_id, template_params);
  // setMessage('Your message has been sent!!!');
  
  // emailjs
  //   .sendForm('gmail', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
  //   .then(
  //     result => {
  //       console.log(result.text)
  //     },
  //     error => {
  //       console.log(error.text)
  //     }
  //   )
}

const form = document.querySelector('.form')
form.addEventListener('submit', sendEmail)
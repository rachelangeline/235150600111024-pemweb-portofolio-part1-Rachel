let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset +height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add ('active')
            }
            )
        }
    }
    )
}

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault() 

    emailjs.sendForm('service_3p7r8rq', 'template_ko6mx6a', '#contact-form', '8oqwegcxfra9MzD6l')
    .then(() => {
    
        contactMessage.textContent = 'Message sent successfully!'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)
        contactForm.reset()
    }, (error) => {
        contactMessage.textContent = 'Message not sent. Please try again later.'
        console.error('EmailJS error:', error)
    })
}

contactForm.addEventListener('submit', sendEmail)

emailjs.init({
    publicKey: 'YOUR_PUBLIC_KEY',
  });

  emailjs.sendForm('contact_service', 'contact_form', this);
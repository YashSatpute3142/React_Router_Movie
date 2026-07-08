import { Form } from "react-router-dom"

export const contactData = async({request}) => {
    try {
      const res = await  request.formData();
      const data = Object.fromEntries(res);
      console.log(data);
      
    } catch (error) {
        console.log(error);
        
        
    }
}

export const Contact = () => {
    return (
         <>
  <div className="section-contact">
    

    <div className="container grid grid-two--cols">
      <div className="contact-content">
        <Form method="POST" action="/contact">
          <div className="grid grid-two--cols mb-3">
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                required
                autoComplete="off"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email">Enter Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                autoComplete="off"
                placeholder="abc@gmail.com"
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Your main title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="20"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div>
            <button type="submit" className="btn btn-submit">
              Send Message
            </button>
          </div>
        </Form>
      </div>

      <div className="contact-map" data-aos="zoom-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04711139276!2d73.78056597971471!3d18.5245985997399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1763826338796!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Pune Map"
        />
      </div>
    </div>
  </div>

  
</>
    )
}
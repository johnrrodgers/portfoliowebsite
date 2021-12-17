import "./contact.css";
import LinkedIn from "../../img/Inlogo.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
        'service_g2m42ar', 
        'template_u77dbhj', 
        formRef.current, 
        'user_gwJpsaQpJbUdjATRNkGZy'
        )

      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <hi className="c-title">Let's discuss your project</hi>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                                src={LinkedIn}
                                alt=""
                                className="c-icon" />
                            johnrrodgers
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Email}
                                alt=""
                                className="c-icon" />
                            devjohnrodgers@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img
                                src={Address}
                                alt=""
                                className="c-icon" />
                            Austin, Tx
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "white" }} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "white" }} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "white" }} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "white" }} rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                        {done && "Thank you."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact

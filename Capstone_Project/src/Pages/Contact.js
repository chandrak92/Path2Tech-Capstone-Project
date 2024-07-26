import { useForm } from "react-hook-form";
import { useState } from "react";
import "../Style/contact.css"

const Contact = () => {
    // let founderEmail= [["moores0929@gmail.com", "Simone"], ["","Chandra"], ["", "Yarmin"]];
    const [selectedEmail, setSelectedEmail] = useState([]);
    const [hovered, setHovered] = useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
      const email = data.email;
      const body = data.body;
      const subject = data.subject;
    //   const mailToLink = `mailto:${}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("From: " + email + ", Message: " + body)}`;
    //   window.location.href = mailToLink;
    }
    // const handleClick = (event) => {
    //     if {
        // const founderEmail = selectedEmail.filter(); 
        // setSelectedArray(founderEmail);
    //         // .filter() remove if value exists, works to remove email if selected
    //     } else {
    //         setSelectedEmail ([...selectedEmail, event.target.value])
    //     }
       
    // }
    return(
        <section className="contact-container">
            <div className="contact-head">
                <h2>Contact Form</h2>
                <p>If you are interested in our work, fill out this form below</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {/* ternary operator to conditional style a way to confirm you've selected an email */}
                    <ul className="contact-drop">
                        <li className="founder-email">Contact Founder</li>
                            <ul className={`dropdown-contact ${hovered ? "active-contact" : "hidden-contact" }`}>
                                    <li className="founder" value="" onClick="">Chandra</li>
                                    <li className="founder" value="moores0929@gmail.com" onCLick="">Simone</li>
                                    <li className="founder" value="" onClick="">Yarmin</li>
                            </ul>
                    </ul>
                </div>
                <label htmlFor="email">
                    <p>Your Email</p>
                    <input
                    {...register("email", { required: true })}
                    type="email" 
                    id="email" 
                    placeholder="Enter your email here"
                    required
                    />
                </label>
                <label htmlFor="subject">
                    <p>Subject</p>
                    <input 
                    {...register("subject", { required: true })}
                    type="text" 
                    id="subject"
                    placeholder="Enter your subject here"
                    required
                    />
                </label>
                <label htmlFor="body">
                    <p>Body</p>
                    <textarea
                    {...register("body", { required: true })}
                    id="body" 
                    placeholder="Enter your message here"
                    required
                    />
                </label>
                <button type="submit">Send Email</button>
            </form>
        </section>
    )
}
export default Contact
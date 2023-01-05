import classes from "./ContactMe.module.css";
import ContactInfo from "./ContactMeContents/ContactInfo";
import ContactForm from "./ContactMeContents/ContactForm";
const ContactMe = () => {
  return (
    <section id="contact" className={classes.sectionContactMe}>
      <div className={classes.container}>
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactMe;

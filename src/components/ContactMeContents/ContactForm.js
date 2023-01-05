import classes from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <div className={classes.contactForm}>
      <h2>Send a Message</h2>
      <div className={classes.formBox}>
        <div className={`${classes.inputBox} ${classes.w50}`}>
          <input type="text" name="" required />
          <span>First Name</span>
        </div>
        <div className={`${classes.inputBox} ${classes.w50}`}>
          <input type="text" required />
          <span>Last Name</span>
        </div>
        <div className={`${classes.inputBox} ${classes.w50}`}>
          <input type="email" required />
          <span>Email Address</span>
        </div>
        <div className={`${classes.inputBox} ${classes.w50}`}>
          <input type="text" required />
          <span>Mobile Number</span>
        </div>
        <div className={`${classes.inputBox} ${classes.w100}`}>
          <textarea required></textarea>
          <span>Write your message here...</span>
        </div>
        <div className={`${classes.inputBox} ${classes.w100}`}>
          <input type="submit" value="Send" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

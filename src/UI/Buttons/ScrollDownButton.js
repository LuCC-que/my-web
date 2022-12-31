import classes from "./ScrollDownButton.module.css";
const ScrollDownButton = () => {
  return (
    <a href="#about" className={classes["scroll-down"]}>
      <svg
        className={classes.icon}
        width="20"
        height="28"
        viewBox="0 0 20 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 5.6C9.62112 5.6 9.25776 5.7475 8.98985 6.01005C8.72194 6.2726 8.57143 6.6287 8.57143 7V9.8C8.57143 10.1713 8.72194 10.5274 8.98985 10.7899C9.25776 11.0525 9.62112 11.2 10 11.2C10.3789 11.2 10.7422 11.0525 11.0102 10.7899C11.2781 10.5274 11.4286 10.1713 11.4286 9.8V7C11.4286 6.6287 11.2781 6.2726 11.0102 6.01005C10.7422 5.7475 10.3789 5.6 10 5.6ZM10 0C7.34784 0 4.8043 1.0325 2.92893 2.87035C1.05357 4.70821 0 7.20088 0 9.8V18.2C3.95203e-08 20.7991 1.05357 23.2918 2.92893 25.1296C4.8043 26.9675 7.34784 28 10 28C12.6522 28 15.1957 26.9675 17.0711 25.1296C18.9464 23.2918 20 20.7991 20 18.2V9.8C20 7.20088 18.9464 4.70821 17.0711 2.87035C15.1957 1.0325 12.6522 0 10 0ZM17.1429 18.2C17.1429 20.0565 16.3903 21.837 15.0508 23.1497C13.7112 24.4625 11.8944 25.2 10 25.2C8.1056 25.2 6.28878 24.4625 4.94924 23.1497C3.60969 21.837 2.85714 20.0565 2.85714 18.2V9.8C2.85714 7.94348 3.60969 6.16301 4.94924 4.85025C6.28878 3.5375 8.1056 2.8 10 2.8C11.8944 2.8 13.7112 3.5375 15.0508 4.85025C16.3903 6.16301 17.1429 7.94348 17.1429 9.8V18.2Z"
          fill="#6E57E0"
        />
      </svg>
      Scroll down
      <svg
        className={classes.icon}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.75179 4.40384C9.6744 4.32581 9.58233 4.26388 9.48088 4.22162C9.37944 4.17935 9.27063 4.15759 9.16073 4.15759C9.05083 4.15759 8.94202 4.17935 8.84058 4.22162C8.73913 4.26388 8.64706 4.32581 8.56967 4.40384L5.83079 7.15104V0.832484C5.83079 0.611695 5.74309 0.39995 5.58697 0.243829C5.43084 0.087708 5.2191 0 4.99831 0C4.77752 0 4.56578 0.087708 4.40966 0.243829C4.25353 0.39995 4.16583 0.611695 4.16583 0.832484V7.15104L1.42695 4.40384C1.27019 4.24708 1.05758 4.15901 0.83589 4.15901C0.614198 4.15901 0.401586 4.24708 0.244827 4.40384C0.0880668 4.5606 0 4.77321 0 4.9949C0 5.21659 0.0880668 5.42921 0.244827 5.58597L4.40725 9.74838C4.48642 9.82417 4.57978 9.88359 4.68197 9.92321C4.78161 9.96725 4.88936 9.99 4.99831 9.99C5.10726 9.99 5.21501 9.96725 5.31465 9.92321C5.41684 9.88359 5.5102 9.82417 5.58937 9.74838L9.75179 5.58597C9.82982 5.50858 9.89175 5.4165 9.93402 5.31506C9.97628 5.21361 9.99804 5.1048 9.99804 4.9949C9.99804 4.885 9.97628 4.7762 9.93402 4.67475C9.89175 4.5733 9.82982 4.48123 9.75179 4.40384Z"
          fill="#6E57E0"
        />
      </svg>
    </a>
  );
};

export default ScrollDownButton;

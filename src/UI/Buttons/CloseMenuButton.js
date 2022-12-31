import classes from "./CloseMenuButton.module.css";
const CloseMenuButton = () => {
  return (
    <button className={classes["close-menu-button"]}>
      <img
        src="./assets/img/menu-close.svg"
        width="16"
        height="16"
        alt="Close menu button"
      />
    </button>
  );
};

export default CloseMenuButton;

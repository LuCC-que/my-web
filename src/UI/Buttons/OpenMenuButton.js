import classes from "./OpenMenuButton.module.css";
const OpenMenuButton = () => {
  return (
    <button className={classes["open-menu-button"]}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <title>Menu Open</title>
        <path
          d="M6.4 8.8H.8a.8.8 0 0 0-.8.8v5.6a.8.8 0 0 0 .8.8h5.6a.8.8 0 0 0 .8-.8V9.6a.8.8 0 0 0-.8-.8zm-.8 5.6h-4v-4h4v4zM15.2 0H9.6a.8.8 0 0 0-.8.8v5.6a.8.8 0 0 0 .8.8h5.6a.8.8 0 0 0 .8-.8V.8a.8.8 0 0 0-.8-.8zm-.8 5.6h-4v-4h4v4zm.8 3.2H9.6a.8.8 0 0 0-.8.8v5.6a.8.8 0 0 0 .8.8h5.6a.8.8 0 0 0 .8-.8V9.6a.8.8 0 0 0-.8-.8zm-.8 5.6h-4v-4h4v4zM6.4 0H.8a.8.8 0 0 0-.8.8v5.6a.8.8 0 0 0 .8.8h5.6a.8.8 0 0 0 .8-.8V.8a.8.8 0 0 0-.8-.8zm-.8 5.6h-4v-4h4v4z"
          fill="#000"
        />
      </svg>
    </button>
  );
};

export default OpenMenuButton;

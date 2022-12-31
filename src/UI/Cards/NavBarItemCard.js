import classes from "./NarBarItemCard.module.css";
const NavBarItemCard = (props) => {
  const { herf, content } = props.item;
  // adding '-active' to highlight
  return (
    <li className={classes.item}>
      <a href={herf} className={classes.link}>
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{content}</title>
          <path
            d="M13.584 4.813 8.79.61a2.397 2.397 0 0 0-3.197 0L.8 4.813A2.397 2.397 0 0 0 0 6.62v6.984A2.397 2.397 0 0 0 2.397 16h9.589a2.398 2.398 0 0 0 2.397-2.397V6.61a2.399 2.399 0 0 0-.8-1.798zM8.79 14.402H5.593v-3.995a.8.8 0 0 1 .8-.8H7.99a.799.799 0 0 1 .799.8v3.995zm3.995-.8a.799.799 0 0 1-.8.8h-1.597v-3.995A2.397 2.397 0 0 0 7.99 8.01H6.392a2.397 2.397 0 0 0-2.397 2.397v3.995H2.397a.8.8 0 0 1-.799-.8v-6.99a.8.8 0 0 1 .272-.6l4.794-4.195a.8.8 0 0 1 1.055 0l4.794 4.195a.8.8 0 0 1 .272.6v6.99z"
            fill="#6E57E0"
          />
        </svg>
        {content}
      </a>
    </li>
  );
};

export default NavBarItemCard;

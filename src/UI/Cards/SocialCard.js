import classes from "./SocialCard.module.css";
const SocialCard = () => {
  return (
    <>
      <li className={classes.item}>
        <a
          href="https://youtube.com/"
          className={classes.link}
          rel="noopener"
          target="_blank"
        >
          <svg
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Youtube</title>
            <path d="m11.601 5.832-2.7-1.566a1.557 1.557 0 0 0-1.584 0 1.539 1.539 0 0 0-.783 1.368v3.132a1.54 1.54 0 0 0 .783 1.368 1.557 1.557 0 0 0 1.584 0l2.7-1.566a1.584 1.584 0 0 0 0-2.7v-.036zM8.316 8.388V6.012L10.368 7.2 8.316 8.388zM15.3 0H2.7A2.7 2.7 0 0 0 0 2.7v9a2.7 2.7 0 0 0 2.7 2.7h12.6a2.7 2.7 0 0 0 2.7-2.7v-9A2.7 2.7 0 0 0 15.3 0zm.9 11.7a.9.9 0 0 1-.9.9H2.7a.9.9 0 0 1-.9-.9v-9a.9.9 0 0 1 .9-.9h12.6a.9.9 0 0 1 .9.9v9z" />
          </svg>
        </a>
      </li>
      <li className={classes.item}>
        <a
          href="https://github.com/"
          className={classes.link}
          rel="noopener"
          target="_blank"
        >
          <svg
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Github</title>
            <path d="M7.5 17.167a.88.88 0 0 0-1.04-.865c-1.152.211-2.606.243-2.993-.843a5.024 5.024 0 0 0-1.617-2.126c-.051-.028-.1-.06-.146-.096a.88.88 0 0 0-.82-.568H.88a.88.88 0 0 0-.88.876c-.003.717.714 1.177 1.005 1.333.343.344.619.75.813 1.196.32.9 1.252 2.267 3.93 2.091l.002.087.004.236a.88.88 0 1 0 1.76 0l-.004-.28c-.004-.167-.01-.409-.01-1.04zm9.388-13.312c.028-.11.055-.232.08-.37a5.525 5.525 0 0 0-.36-2.898.881.881 0 0 0-.542-.51c-.313-.106-1.47-.314-3.682 1.1a12.206 12.206 0 0 0-5.592 0C4.588-.217 3.438-.027 3.127.072a.878.878 0 0 0-.555.514 5.545 5.545 0 0 0-.355 2.954c.021.113.044.217.068.312a5.518 5.518 0 0 0-1.104 3.37c-.003.271.01.542.037.812.294 4.05 2.934 5.266 4.774 5.684-.038.11-.073.228-.104.353a.88.88 0 0 0 1.71.42c.055-.293.199-.562.411-.772a.88.88 0 0 0-.48-1.536c-3.04-.347-4.36-1.586-4.559-4.311a5.816 5.816 0 0 1-.03-.65 3.747 3.747 0 0 1 .982-2.591.88.88 0 0 0 .166-.902 2.981 2.981 0 0 1-.137-.489 3.603 3.603 0 0 1 .07-1.421 6.638 6.638 0 0 1 2.125 1.038.888.888 0 0 0 .728.117 10.365 10.365 0 0 1 5.433 0 .885.885 0 0 0 .73-.12 6.664 6.664 0 0 1 2.118-1.048c.117.453.143.925.077 1.389a2.81 2.81 0 0 1-.149.534.88.88 0 0 0 .165.902c.068.076.136.159.197.236.534.667.815 1.501.794 2.355.002.229-.01.457-.033.684-.194 2.69-1.519 3.93-4.573 4.277a.88.88 0 0 0-.48 1.537c.219.216.363.496.41.8.06.235.087.477.082.72v2.054c-.009.57-.009.997-.009 1.194a.88.88 0 1 0 1.76 0c0-.191 0-.61.009-1.18V15.24a4.295 4.295 0 0 0-.136-1.154 3.75 3.75 0 0 0-.103-.366 5.732 5.732 0 0 0 4.793-5.654 7.65 7.65 0 0 0 .04-.844 5.396 5.396 0 0 0-1.111-3.367z" />
          </svg>
        </a>
      </li>
      <li className={classes.item}>
        <a href="https://linkedin.com" className={classes.link}>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Linkedin</title>
            <path d="M13.376 6.274c-.752 0-1.493.186-2.156.542a.84.84 0 0 0-.786-.542H7.07a.84.84 0 0 0-.84.84v10.089a.84.84 0 0 0 .84.84h3.363a.84.84 0 0 0 .84-.84v-4.624a.841.841 0 0 1 1.682 0v4.624a.841.841 0 0 0 .84.84h3.363a.84.84 0 0 0 .841-.84v-6.305a4.63 4.63 0 0 0-4.624-4.624zm2.943 10.088h-1.682v-3.783a2.522 2.522 0 0 0-5.044 0v3.783H7.912V7.955h1.681v.591a.841.841 0 0 0 1.498.526 2.928 2.928 0 0 1 5.228 1.826v5.464zM4.549 6.274H1.186a.84.84 0 0 0-.84.84v10.089a.84.84 0 0 0 .84.84H4.55a.84.84 0 0 0 .84-.84V7.114a.84.84 0 0 0-.84-.84zm-.84 10.088H2.027V7.955H3.71v8.407zM2.88.005a2.718 2.718 0 1 0-.047 5.428h.023A2.718 2.718 0 1 0 2.88.005zm-.024 3.747h-.023a1.027 1.027 0 0 1-1.151-1.033c0-.627.47-1.033 1.198-1.033A1.037 1.037 0 0 1 4.054 2.72c0 .627-.47 1.033-1.198 1.033z" />
          </svg>
        </a>
      </li>
    </>
  );
};

export default SocialCard;

/**
 *
 */

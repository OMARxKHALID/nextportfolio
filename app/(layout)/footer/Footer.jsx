import styles from "./Footer.module.sass";
import cn from "classnames";

const Footer = () => {
  return (
    <div className={cn(styles.footer, styles.container)}>
      <a
        href={"https://github.com/OMARxKHALID"}
        className={styles.footer__copy}
        target="_blank"
        rel="noopener noreferrer"
      >
        &#169;OMARxKHALID . All rights reserved
      </a>
    </div>
  );
};

export default Footer;

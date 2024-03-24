"use client";

import styles from "./Footer.module.sass";
import cn from "classnames";

const Footer = () => {
  return (
    <footer className={cn(styles.footer, styles.container)}>
      <a
        href={"https://github.com/OMARxKHALID"}
        className={styles.footer__copy}
        target="_blank"
      >
        &#169;OMARxKHALID . All rights reserved
      </a>
    </footer>
  );
};

export default Footer;

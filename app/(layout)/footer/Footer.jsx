"use client"

import Link from 'next/link';
import styles from './Footer.module.sass';
import cn from 'classnames';

const Footer = () => {
    return (
        <footer className={cn(styles.footer, styles.container)}>
            <Link href={"https://github.com/OMARxKHALID"} className={styles.footer__copy}>&#169;OMARxKHALID . All rights reserved</Link>
        </footer>
    );
}

export default Footer;

"use client";

import Image from "next/image";
import styles from "./Header.module.sass";
import cn from "classnames";
import avatar from "@/public/images/avatar.png";
import resume from "@/public/files/resume.pdf";

const Header = ({ socialData, profileInfo }) => {
  return (
    <header className={cn(styles.profile, styles.container)}>
      <div className={cn(styles.profile__container, styles.grid)}>
        <div className={styles.profile__data}>
          <div className={styles.profile__border}>
            <div className={styles.profile__perfil}>
              <Image
                src={avatar}
                width={100}
                height={"auto"}
                alt=""
                priority={true}
              />
            </div>
          </div>
          <h2 className={styles.profile__name}>Muhammad Umar</h2>
          <h3 className={styles.profession}>Full Stack Developer</h3>

          <ul className={styles.profile__social}>
            {socialData.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className={styles.profile__socialLink}
                rel="noreferrer"
                target="_blank"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </ul>
        </div>

        <div className={cn(styles.profile__info, styles.grid)}>
          {profileInfo.map((info) => (
            <div className={styles.profile__infoGroup} key={info.id}>
              <h3 className={styles.profile__infoNumber}>{info.title}</h3>
              <p className={styles.profile__infoDesctiption}>
                {info.desctiption}
              </p>
            </div>
          ))}
        </div>

        <div className={styles.profile__buttons}>
          <a
            href={resume}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV <i className="ri-download-line"></i>
          </a>

          <div className={styles.profile__buttonsSmall}>
            <a
              href="tel:+923036828908"
              className={cn(
                styles.button,
                styles.buttonSmall,
                styles.button__gray
              )}
            >
              <i className="ri-phone-line"></i>
            </a>
            <a
              href="mailto:mirxaumar1212@gmail.com"
              className={cn(
                styles.button,
                styles.buttonSmall,
                styles.button__gray
              )}
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-mail-line"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

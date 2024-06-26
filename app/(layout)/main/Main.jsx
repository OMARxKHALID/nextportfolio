"use client";

import { useState } from "react";
import styles from "./Main.module.sass";
import cn from "classnames";
import Image from "next/image";

const Main = ({ projectData, skillsDataBackEnd, skillsDataFrontEnd }) => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <main className={styles.main}>
      <section className={cn(styles.filters, styles.container)}>
        <ul className={styles.filters__content}>
          <button
            className={cn(
              styles.filters__button,
              activeTab === "projects" ? styles.activeButton : styles.noActive
            )}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
          <button
            className={cn(
              styles.filters__button,
              activeTab === "skills" ? styles.activeButton : styles.noActive
            )}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
        </ul>

        <div className={styles.filters__sections}>
          <div
            className={cn(
              styles.projects__content,
              styles.grid,
              activeTab === "projects" && styles.activeTab
            )}
          >
            {activeTab === "projects" && (
              <>
                {projectData.map((item) => (
                  <article className={styles.projects__card} key={item.id}>
                    <Image src={item.img} alt={item.imgAlt} priority={true} />

                    <div className={styles.projects__modal}>
                      <div>
                        <span className={styles.projects__subtitle}>
                          {item.subtitle}
                        </span>
                        <h3 className={styles.projects__title}>{item.title}</h3>
                        <a
                          href={item.projectLink}
                          className={cn(
                            styles.projects__button,
                            styles.button,
                            styles.projects__small
                          )}
                          target="_blank"
                        >
                          <i className="ri-link"></i>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </>
            )}
          </div>
          <div
            className={cn(
              styles.skills__content,
              styles.grid,
              activeTab === "skills" && styles.activeTab
            )}
          >
            {activeTab === "skills" && (
              <>
                <div className={styles.skills__area}>
                  <h3 className={styles.skills__title}>Front-end developer</h3>

                  <div className={styles.skills__box}>
                    <div className={styles.skills__group}>
                      {skillsDataFrontEnd.map((item) => (
                        <div className={styles.skills__data} key={item.id}>
                          <i className={item.icon}></i>

                          <div>
                            <h3 className={styles.skills__name}>
                              {item.skill}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.skills__area}>
                  <h3 className={styles.skills__title}>Back-end developer</h3>

                  <div className={styles.skills__box}>
                    <div className={styles.skills__group}>
                      {skillsDataBackEnd.map((item) => (
                        <div className={styles.skills__data} key={item.id}>
                          <i className={item.icon}></i>
                          <div>
                            <h3 className={styles.skills__name}>
                              {item.skill}
                            </h3>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

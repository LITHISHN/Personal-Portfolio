import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Lithish</h1>
        <p className={styles.description}>
        I am a passionate Software Engineer with a strong background in Java, Python, and SQL, eager to apply my skills in developing data-driven and scalable applications. With hands-on experience in machine learning, full-stack development, and Data Science , I strive to drive meaningful impact in innovative projects 
        </p>
        <a href="mailto:lithishnatarjan@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

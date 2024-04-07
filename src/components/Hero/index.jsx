import { useState } from "react";
import clsx from "clsx";
import styles from './hero.module.scss';
import Computers from "../canvas/Computers";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div>
        <h1 className={styles.title}>
          {`Hi, I'm Rebecca`}
        </h1>
        <h5 className={styles.subtitle}>
          {`I'm a frontend developer.`}
        </h5>
      </div>

      <div className={styles.canvasContainer}>
        <Computers />
      </div>
    </section>
  )
}

export default Hero;
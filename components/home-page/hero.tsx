import classes from './hero.module.scss';
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={'/images/site/seba.jpeg'}
          alt={'An image showing Seba'}
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im Sebastian</h1>
      <p>I&apos;m a Full-Stack Engineer with 3 years of experience in Web development </p>
    </section>
  );
};

export default Hero;

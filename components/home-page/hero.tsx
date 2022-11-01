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
      <h1>Hi, Im Seba</h1>
      <p> Hola </p>
    </section>
  );
};

export default Hero;

import classes from "./HeroSplashImage.module.css";
import splashArt from "../../../assets/Images/Home/Hero-SplashArt-Interior.webp";

// TODO: Add blurred out version of image for lazy loading and better visibility

const HeroSplashImage = () => {
  return (
    <div className={classes.imageContainer}>
      <img
        className={classes.splashImage}
        src={splashArt}
        alt="Splash Art of our Cafe's Interior"
      />
      <div className={classes.overlay} />
      <h1 className={classes.splashText}>
        A Melody of Exquisite Brews Echoes Within <br />
        <span className={classes.splashName}>
          <h1 className={classes.splashName}>The Coffee Coop</h1>
        </span>
      </h1>
    </div>
  );
};

export default HeroSplashImage;

import classes from "./Home.module.css";
import splashArt from "../../assets/Images/Hero-SplashArt-Interior.webp";

function Home() {
  return (
    <>
      <div className={classes.imageContainer}>
        <img
          className={classes.splashImage}
          src={splashArt}
          alt="Splash Art of our Cafe's Interior"
        />
        <div className={classes.overlay} />
        <h1 className={classes.splashText}>
          A Melody of Exquisite Brews Echoes Within <br />
          <span className={classes.splashName}><h1 className={classes.splashName}>The Coffee Coop</h1></span>
        </h1>
      </div>
    </>
  );
}

export default Home;

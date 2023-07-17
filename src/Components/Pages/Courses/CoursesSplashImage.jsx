import classes from "./CoursesSplashImage.module.css";
import coursesSplashArt from "../../../assets/Images/Courses/Courses_BannerSplashArt.webp";

const CoursesSplashImage = () => {
  return (
    <section>
      <div className={classes.imageContainer}>
        <img
          className={classes.splashImage}
          src={coursesSplashArt}
          alt="Promo Art for our Courses"
        />
        <div className={classes.overlay} />
        <div className={classes.textContainer}>
          <h1 className={classes.courseHeadline}>
            Brew your own Coffee with confidence
          </h1>
          <p className={classes.courseParagraph}>
            At The Coffee Coop, our baristas just love teaching people how to
            make your very own perfect cup of coffee!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoursesSplashImage;

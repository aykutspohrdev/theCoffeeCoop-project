import CourseOverview from "./CourseOverview_Dep";
import classes from "./CoursesSelection.module.css";

const CoursesSelection = () => {

  return (
    <section>
      <div className={classes.sectionContainer}>
        <h1 className={classes.headline}>Check out our courses!</h1>
        <div className={classes.coursesSelector}>
          <CourseOverview overviewNum={0} />
          <CourseOverview overviewNum={1} />
          <CourseOverview overviewNum={2} />
        </div>
      </div>
    </section>
  );
};

export default CoursesSelection;

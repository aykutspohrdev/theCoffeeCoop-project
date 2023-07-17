import classes from "./CourseOverview.module.css";
import CourseOverviewItem from "./CourseOverviewItem";

const CourseOverview = () => {
  return (
    <section className={classes.overviewContainer}>
      <h1 className={classes.overviewHeadline}>
        What you can expect <br /> from our courses
      </h1>
      <CourseOverviewItem itemNum={0}/>
      <CourseOverviewItem itemNum={1}/>
      <CourseOverviewItem itemNum={2}/>
    </section>
  );
};

export default CourseOverview;

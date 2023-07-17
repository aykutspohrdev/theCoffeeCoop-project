import classes from "./CourseBulletPoints.module.css";
import { v4 as uuidv4 } from "uuid";

const CourseBulletPoints = (props) => {
  const inputPoints = props.bulletPoints;
  const listItems = inputPoints.map((bullet) => (
    <li className={classes.bullet} key={uuidv4()}>
      {bullet}
    </li>
  ));

  return (
    <>
      <h1 className={classes.learningsHeadline}>What you&apos;ll learn:</h1>
      <ul className={classes.learningsList}>{listItems}</ul>
    </>
  );
};

export default CourseBulletPoints;

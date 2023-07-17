import classes from "./CourseSelectorHeader.module.css";
import { v4 as uuidv4 } from "uuid";

const CourseSelectorHeader = (props) => {
  const wordArray = [...props.word];
  return (
    <h2 className={classes.courseHead}>
      {wordArray.map((letter) => {
        return (
          <span key={uuidv4()} className={classes.courseHeadLetter}>
            {letter}
          </span>
        );
      })}
    </h2>
  );
};

export default CourseSelectorHeader;

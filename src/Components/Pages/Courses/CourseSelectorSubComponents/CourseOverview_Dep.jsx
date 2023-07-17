import { useContext } from "react";
import { APIContext } from "src/Components/Context/APIContext";
import CourseSelectorHeader from "./CourseSelectorHeader";
import CourseBulletPoints from "./CourseBulletPoints";

import classes from "./CourseOverview.module.css";

const CourseOverview = (props) => {
  const APIdata = useContext(APIContext);

  const infoContainerClickHandler = (event) => {
    const currentActiveItem = document.querySelector("[data-active=true]");
    const clickedItem = event.currentTarget;
    const clickedIdActive = clickedItem.getAttribute("data-active");

    if (clickedIdActive === "true") {
      return;
    } else {
      currentActiveItem.setAttribute("data-active", "false");
      clickedItem.setAttribute("data-active", "true");
    }
  };

  if (APIdata.loading) {
    return <CourseSelectorHeader word={"LOADING DATA"} />;
  } else {
    return (
      <>
        <div
          id={APIdata.storeData.courses[`${props.overviewNum}`].skillLevel}
          className={classes.courseInfoContainer}
          data-active={
            APIdata.storeData.courses[`${props.overviewNum}`].skillLevel ===
            "beginner"
              ? "true"
              : "false"
          }
          onClick={infoContainerClickHandler}
        >
          <CourseSelectorHeader
            word={APIdata.storeData.courses[
              `${props.overviewNum}`
            ].skillLevel.toUpperCase()}
          />
          <div
            className={classes.bgImage}
            style={{
              backgroundImage: `url(${
                APIdata.storeData.courses[`${props.overviewNum}`].imageSrc
              })`,
            }}
          />

          <h1 className={classes.overviewH1}>
            {APIdata.storeData.courses[`${props.overviewNum}`].longDescription}
          </h1>
          <CourseBulletPoints bulletPoints={APIdata.storeData.courses[`${props.overviewNum}`].whatYoullLearn}/>
          {/* <p className={classes.overviewP}>
            {APIdata.storeData.courses[`${props.overviewNum}`].whatYoullLearn}
          </p> */}
          <p className={classes.overviewP}>
            {APIdata.storeData.courses[`${props.overviewNum}`].price}
          </p>
        </div>
      </>
    );
  }

  // return <CourseSelectorHeader word="INTERMEDIATE" />;
};

export default CourseOverview;

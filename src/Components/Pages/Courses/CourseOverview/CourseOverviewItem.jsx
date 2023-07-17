import { useContext } from "react";
import { APIContext } from "src/Components/Context/APIContext";
import classes from "./CourseOverviewItem.module.css";

const CourseOverviewItem = (props) => {
  const APIdata = useContext(APIContext);

  if (APIdata.loading) {
    return <h1 className={classes.itemContainer}>Loading Data... </h1>;
  } else {
    return (
      <div className={classes.itemContainer} data-index={props.itemNum}>
        <div className={classes.imageContainer}>
          <img
            className={classes.itemImage}
            src={
              `src/assets/Images/Courses/CourseOverviewItem_Img_${props.itemNum}.webp`
            }
          ></img>
        </div>
        <div className={classes.itemTextContainer}>
          <h2 className={classes.itemHeadline}>
            {APIdata.storeData.courseOverviewItems[`${props.itemNum}`].headline}
          </h2>
          <p className={classes.itemText}>
            {APIdata.storeData.courseOverviewItems[`${props.itemNum}`].text}
          </p>
        </div>
      </div>
    );
  }
};

export default CourseOverviewItem;

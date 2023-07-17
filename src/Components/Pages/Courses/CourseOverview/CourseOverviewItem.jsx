import { useContext } from "react";
import { APIContext } from "@/Components/Context/APIContext";
import classes from "./CourseOverviewItem.module.css";
import image_0 from "../../../../assets/Images/Courses/CourseOverviewItem_Img_0.webp";
import image_1 from "../../../../assets/Images/Courses/CourseOverviewItem_Img_1.webp";
import image_2 from "../../../../assets/Images/Courses/CourseOverviewItem_Img_2.webp";

const CourseOverviewItem = (props) => {
  const APIdata = useContext(APIContext);
  const currentImage = (num) => {
    if (num === 0) {
      return image_0;
    } else if (num === 1) {
      return image_1;
    } else return image_2;
  };

  if (APIdata.loading) {
    return <h1 className={classes.itemContainer}>Loading Data... </h1>;
  } else {
    return (
      <div className={classes.itemContainer} data-index={props.itemNum}>
        <div className={classes.imageContainer}>
          <img
            className={classes.itemImage}
            src={currentImage(props.itemNum)}
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

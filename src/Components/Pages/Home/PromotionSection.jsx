import classes from "./PromotionSection.module.css";
import promo1 from "../../../assets/Images/Home/Promotion-Images/Cake_Promo_Image.webp";
import promo2 from "../../../assets/Images/Home/Promotion-Images/ColdBrew_Coffee_Promo_Image.webp";
import promo3 from "../../../assets/Images/Home/Promotion-Images/Croissant_Promo_Image.webp";
import promo4 from "../../../assets/Images/Home/Promotion-Images/Latte_Coffee_Promo_Image.webp";

const PromotionSection = () => {
  return (
    <section>
      <div className={classes.sectionContainer}>
        <h1 className={classes.topText}>
          What you&apos;ll find <br />
          <span className={classes.middleText}>at our</span>
          <br />
          <span className={classes.bottomText}>little cafe</span>
        </h1>

        <div className={classes.promotionContainer}>
          <div className={classes.promotionItem}>
            <div className={classes.imageContainer}>
              <img
                className={classes.promoImage}
                src={promo1}
                alt="Promotional art of a cake that The Coffee Coop serves"
              />
            </div>
            <p className={classes.promoText}>
              We have our very own confectionery!
            </p>
          </div>
          <div className={classes.promotionItem}>
            <div className={classes.imageContainer}>
              <img
                className={classes.promoImage}
                src={promo4}
                alt="Promotional art of a Latte that The Coffee Coop serves"
              />
            </div>
            <p className={classes.promoText}>
              The best coffee in town, if we do say so ourselves!
            </p>
          </div>
          <div className={classes.promotionItem}>
            <div className={classes.imageContainer}>
              <img
                className={classes.promoImage}
                src={promo2}
                alt="Promotional art of a Cold Brew Coffee that The Coffee Coop serves"
              />
            </div>
            <p className={classes.promoText}>
              Freshly brewed, refreshing Cold Brews! Yeah, we&apos;re in on the
              trend.
            </p>
          </div>
          <div className={classes.promotionItem}>
            <div className={classes.imageContainer}>
              <img
                className={classes.promoImage}
                src={promo3}
                alt="Promotional art of a Croissant that The Coffee Coop serves"
              />
            </div>
            <p className={classes.promoText}>
              Want a little Paris for breakfast? We got you - with our
              croissants!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSection;

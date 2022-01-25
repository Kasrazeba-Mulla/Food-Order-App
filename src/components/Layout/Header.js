import { Fragment } from "react";
import mealsImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* div will hold the image  */}
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="Delicacies!!" />
      </div>
    </Fragment>
  );
};

export default Header;

import classes from "./Card.module.css";

// card is just a wrapper component used to add css styling
const Card = (props) => {
  return (
    <div className={classes.card}>
      {props.children}{" "}
      {/* whatever is wrapped inside the opening and closing tags of Card component is brought here  */}
    </div>
  );
};

export default Card;

import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault(); //prevents browser reloading whenever form is submitted
    const enteredAmount = amountInputRef.current.value; //amountInputRef.current.value is a string
    const enteredAmountNumber = +enteredAmount; //converts enteredAmount string to number

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form action="" className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5" /* min and max are already available attributes for the input prop */,
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>PLease enter a valid amount (1-5).!</p>}
    </form>
  );
};

export default MealItemForm;

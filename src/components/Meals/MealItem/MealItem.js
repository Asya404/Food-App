import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.title}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.meal.id}></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;

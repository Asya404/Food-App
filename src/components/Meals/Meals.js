import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./Meals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.999,
  },
];

const Meals = (props) => {
  return (
    <>
      <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
      </section>
      <section className={classes.meals}>
        <Card>
          <ul>{DUMMY_MEALS.map((meal) => <MealItem meal={meal}></MealItem>)}</ul>
        </Card>
      </section>
    </>
  );
};

export default Meals;

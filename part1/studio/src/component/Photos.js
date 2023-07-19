import styles from "./Description.module.css";

export default function RecipePhoto() {
  return (
    <img
      src="https://www.cookingclassy.com/wp-content/uploads/2018/01/guacamole-12.jpg"
      alt="reciepe photo"
      className={styles.imageUpdates}
    />
  );
}

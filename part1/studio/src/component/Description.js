import styles from "./Description.module.css";
import React from "react";
function RecipeAuthor() {
  let authorLink =
    "https://www.eatyourbooks.com/library/17548/the-cooking-of-provincial-france";
  let authorPhoto =
    "https://cook-coquus.com/wp-content/uploads/2013/02/7248-8x10-c.jpg";
  let authorName = "Clifford Wright";

  return (
    <div className={styles.recipeAuthorBlock}>
      <img
        src={authorPhoto}
        alt="Reasonable alt text"
        className={styles.imageUpdates}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Blog name</a>
      </div>
    </div>
  );
}
const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Recipe Title</h1>
        <p>Short recipe description</p>
      </div>
      <RecipeAuthor />
    </div>
  );
};

export default RecipeDescription;

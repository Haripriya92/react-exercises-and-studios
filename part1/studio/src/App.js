import logo from "./logo.svg";
import styles from "./App.css";
import RecipeDescription from "./component/Description";
import RecipeIngredients from "./component/Ingredients";
import RecipePhoto from "./component/Photos";

function App() {
  return (
    <div className="App">
      <div class name={styles.recipePhotoBlock}>
        <RecipeDescription />
        <RecipeIngredients />
        <RecipePhoto />
      </div>
    </div>
  );
}

export default App;

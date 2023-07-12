export default function BookList() {
  let pageTitle = "The thriller series";
  let book1 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbhrh0U9Vifd4KwP9jQbV7p86elmgEwcecw&usqp=CAU";
  let book2 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7_UWgP4H95TRWQyQLeCFZBlt7NeREcvbg&usqp=CAU";
  let book3 =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jHVqSko2_jb7PhRzUpl9hybds9dcJELmTw&usqp=CAU";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="book named Haunting of Hill Image!" />
      <img src={book2} alt="book named Home Before Dark Image!" />
      <img src={book3} alt="book named callum Capman Image!" />
    </div>
  );
}

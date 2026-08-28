import Rating from "./components/Rating";

function App() {
  return (
    <div>
      <Rating
        heading="How do you feel about React?"
        color="blue"
        feedbackMessages={[
          "Hate It",
          "Dislike it",
          "Meh",
          "Like it",
          "Love it",
        ]}
      />
    </div>
  );
}

export default App;

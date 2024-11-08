import Card from "./Card";

function App() {
  console.log("hii");

  return (
    <div className="container">
      <Card
        imgLink="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
        name="Icons8"
        description="This is a cool website"
        buttonText="know more"
      />
      <Card
        imgLink="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"
        name="Icons8"
        description="This is a cool website"
        buttonText="React"
      />
      <Card description="hey there " action={() => console.log("Wow")} />
    </div>
  );
}

export default App;

function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, world! Ici c'est Sawa</h1>
      <h2>The time now is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
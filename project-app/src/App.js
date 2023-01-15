function App() {
  const inputType = 'number';
  const minValue = 0;
  const maxValue = 100;
  return (
    <div className="test-div">
      <textarea
        autoFocus={true}
        maxLength={100}
        style={{ color: 'red', paddingTop: '100px', border: '1px solid red' }}
      />
    </div>
  );
}

export default App;

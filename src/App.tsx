
function App() {
  return (
    <>
      <button onClick={() => {window.location.href='https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls'}}>Download File</button>
      <a href="https://file-examples.com/wp-content/storage/2017/02/file_example_XLS_10.xls" rel="noreferrer" target="_blank" download="file_example_XLS_10.xls">
        <button>Download File</button>
      </a>
    </>
  );
}

export default App;

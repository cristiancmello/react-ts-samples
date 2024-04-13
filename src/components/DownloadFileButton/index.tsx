

const DownloadFileButton = () => {
  const handleClick = () => {
    window.location.href = 'https://github.com/cristiancmello/react-ts-samples/raw/main/public/files/file_example_XLS_10.xls'
  }

  return <button data-testid="button_DownloadFile" onClick={handleClick}>Download File</button>
}

export default DownloadFileButton
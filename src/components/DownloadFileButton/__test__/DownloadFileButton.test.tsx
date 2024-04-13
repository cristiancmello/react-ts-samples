import { fireEvent, render, screen } from "@testing-library/react"
import DownloadFileButton from ".."

// https://stackoverflow.com/questions/65402808/jest-error-not-implemented-navigation-except-hash-changes-when-click-event/68038982#68038982

beforeEach(() => {
  window = Object.create(window);
  const url = "";
  Object.defineProperty(window, 'location', {
    value: {
      href: url
    },
    writable: true
  });
})

test("DownloadFileButton", async () => {
  render(<DownloadFileButton />)

  const downloadFileButton = await screen.findByTestId("button_DownloadFile")

  fireEvent.click(downloadFileButton);

  expect(window.location.href).toContain("file_example_XLS_10.xls")
})
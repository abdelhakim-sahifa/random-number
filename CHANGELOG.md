# Updates in Code

### v1.1 (*07-07-2024*)

- **Added History Feature:** Implemented a history section (`historyDiv`) to display recently generated random numbers. The history is stored locally and persists across sessions.
- **Enhanced Clipboard Functionality:** Improved `copyToClipboard` to ensure text copying even when the window is not focused, enhancing usability.
- **Dark Mode Improvement:** Extended dark mode styling to include `historyDiv`, maintaining a consistent UI experience across elements.

### v1.2 (*08-07-2024*) 

- **Added Fun Fact Feature:** Implemented the `getFunFact` function to fetch and display a fun fact about a given number from Numbers API. The fact is shown in `funFactLbl`, and if the number is not found, a default message is shown.
- **Error Handling Improvement:** Enhanced error handling within the `getFunFact` function to display a user-friendly message when the fetch operation encounters an error.
- **Dynamic Content Update:** Updated the `funFactLbl` to dynamically display fetched content, ensuring it only appears when valid data is retrieved.
# Updates in Code

### v1.1 (*07-07-2024*)

- **Added History Feature:** Implemented a history section (`historyDiv`) to display recently generated random numbers. The history is stored locally and persists across sessions.
- **Enhanced Clipboard Functionality:** Improved `copyToClipboard` to ensure text copying even when the window is not focused, enhancing usability.
- **Dark Mode Improvement:** Extended dark mode styling to include `historyDiv`, maintaining a consistent UI experience across elements.

### v1.2 (*08-07-2024*) 

- **Added Fun Fact Feature:** Implemented the `getFunFact` function to fetch and display a fun fact about a given number from Numbers API. The fact is shown in `funFactLbl`, and if the number is not found, a default message is shown.
- **Error Handling Improvement:** Enhanced error handling within the `getFunFact` function to display a user-friendly message when the fetch operation encounters an error.
- **Dynamic Content Update:** Updated the `funFactLbl` to dynamically display fetched content, ensuring it only appears when valid data is retrieved.

### v1.3 (*06-03-2025*)

- **Improved Fun Fact Processing:** 
  - Updated `getFunFact` function to use direct fetch instead of CORS proxy, improving reliability and removing dependency on external proxy service
  - Added response cleaning with regex to remove number prefix from API responses
  - Implemented filtering of uninteresting facts using `notAfactResponses` array, displaying a custom message for boring numbers
  - Made the function async/await consistent with modern JavaScript practices

- **Enhanced Error Handling:**
  - Simplified error handling in `getFunFact` with try/catch block
  - Removed unnecessary proxy-related complexity
  - Improved error logging with console.error for better debugging

- **Content Display Optimization:**
  - Added conditional display logic for fun facts, showing "No fun fact available" for unremarkable numbers
  - Maintained dynamic visibility of `funFactLbl` with cleaner implementation
  - Improved fact presentation by cleaning API response text

### v1.4 (*12-03-2025*)  

- **Switched to Custom API:**  
  - Replaced `numbersapi.com` with `numfunfacts.vercel.app`, a custom API powered by Gemini AI for better fact generation.  
  - Removed reliance on external number fact sources, improving control and customization.  

- **Simplified Response Handling:**  
  - Directly extracts `fact` from JSON response instead of parsing raw text.  
  - Eliminated unnecessary regex cleaning since the custom API provides clean responses.  
  - Removed filtering of "uninteresting" facts, allowing API to handle relevant fact selection.  

- **Improved Error Handling & Logging:**   
  - Ensured proper error messaging when the API request fails.  
  - Used `if (funFactLbl)` checks to prevent errors if the element is missing.  

- **Code Optimization:**  
  - Ensured consistent use of `async/await` practices.  
  - Removed redundant condition checks and unnecessary fallback logic.

### v1.5 (*06-09-2025*) 

- **Complete Code Architecture Overhaul:**
  - Rewrote entire codebase using modern ES6 class-based architecture (`RandomNumberApp` class)
  - Implemented proper separation of concerns with dedicated methods for each functionality
  - Enhanced code maintainability and readability with object-oriented design patterns

- **Advanced User Controls:**
  - **Custom Range Selection:** Added user-configurable min/max range inputs instead of fixed preset ranges
  - **Range Validation:** Automatic validation prevents invalid range configurations
  - **Real-time Stats:** Display current range and total generation count with persistent tracking

- **Enhanced History Management:**
  - **Extended History:** Increased history capacity from 3 to 5 items
  - **Clickable History:** History items now clickable for instant copying to clipboard
  - **Duplicate Prevention:** Smart filtering prevents duplicate entries in history
  - **Clear History:** Added dedicated button to reset all history and statistics

- **Improved User Experience:**
  - **Multiple Triggers:** Generate numbers via hover, click, or spacebar key press
  - **Better Animations:** Increased animation duration (15 frames) for more engaging visual feedback
  - **Responsive Design:** Added comprehensive mobile-responsive breakpoints and layouts
  - **Enhanced Accessibility:** Better keyboard navigation and screen reader support

- **Robust Technical Improvements:**
  - **Advanced Clipboard:** Multiple fallback methods for reliable copying across all browsers and contexts
  - **API Optimization:** Added request timeout (5s) and proper error handling for fun fact API calls
  - **Leading Zero Handling:** Smart processing removes unnecessary leading zeros for API calls while preserving display formatting
  - **Memory Optimization:** Eliminated redundant DOM queries and improved event handling efficiency
  - **Generation Tracking:** Persistent counter tracks total numbers generated across sessions

- **Code Quality Enhancements:**
  - **Error Resilience:** Comprehensive try/catch blocks with graceful degradation
  - **Performance Optimization:** Reduced unnecessary operations and improved rendering efficiency  
  - **Modern JavaScript:** Full ES6+ syntax with proper async/await patterns throughout
  - **Clean Architecture:** Modular design with clear separation of initialization, state management, and user interactions
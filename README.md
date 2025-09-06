![the random number!](https://i.ibb.co/L6DYJzw/image-removebg-preview-2.png)

# The Random Number Generator

An interactive web application that generates random numbers with engaging animations, fun facts, and comprehensive user controls. Built with vanilla JavaScript, HTML, and CSS.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Recent Updates](#recent-updates)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [API Integration](#api-integration)
- [Browser Support](#browser-support)
- [License](#license)

## Demo

You can view a live demo of the project [here](https://abdelhakim-sahifa.github.io/random-number/).

## Features

### Core Functionality
- **Dynamic Number Generation:** Generate random numbers with smooth transition animations
- **Multiple Triggers:** Mouse hover, click, or spacebar key press to generate numbers
- **Custom Range Selection:** User-configurable minimum and maximum range values
- **Smart Padding:** Display numbers with leading zeros (e.g., 0007) while sending clean values to APIs

### User Interface
- **Dark/Light Mode Toggle:** Seamless theme switching with persistent preferences
- **Responsive Design:** Optimized for desktop, tablet, and mobile devices
- **Engaging Animations:** Visual feedback with color transitions during number generation
- **Intuitive Controls:** Clean, accessible interface with hover effects and transitions

### Advanced Features
- **History Tracking:** Keep track of the last 5 generated numbers with click-to-copy functionality
- **Fun Facts Integration:** Fetch interesting facts about generated numbers using AI-powered API
- **Statistics Display:** Real-time stats showing current range and total generation count
- **Clipboard Integration:** Automatic copying with multiple fallback methods for browser compatibility

### Technical Capabilities
- **Persistent Storage:** All preferences, history, and statistics saved locally
- **Error Handling:** Graceful degradation when external services are unavailable
- **Performance Optimized:** Efficient DOM manipulation and memory management
- **Keyboard Accessible:** Full keyboard navigation support

## Recent Updates (*06-09-2025*)

### v2.0 - Major Architecture Overhaul

- **🏗️ Complete Code Restructure:**
  - Rewrote entire application using modern ES6 class-based architecture
  - Implemented `RandomNumberApp` class with proper separation of concerns
  - Enhanced maintainability with object-oriented design patterns

- **⚙️ Advanced User Controls:**
  - **Custom Ranges:** Set your own min/max values instead of preset options
  - **Range Validation:** Automatic validation prevents invalid configurations
  - **Generation Statistics:** Track total numbers generated with persistent counting

- **📋 Enhanced History System:**
  - **Extended Capacity:** Increased from 3 to 5 historical entries
  - **Interactive History:** Click any historical number to copy it instantly
  - **Smart Filtering:** Prevents duplicate entries in history
  - **Clear Function:** Reset all history and statistics with one click

- **🎯 Improved User Experience:**
  - **Multiple Input Methods:** Hover, click, or press spacebar to generate
  - **Better Animations:** Extended animation sequence for more engaging feedback
  - **Mobile Responsive:** Comprehensive breakpoints for all device sizes
  - **Accessibility Enhanced:** Better keyboard navigation and screen reader support

- **🔧 Technical Improvements:**
  - **Robust Clipboard:** Multiple fallback methods for universal compatibility
  - **API Optimization:** Request timeouts and improved error handling
  - **Smart Number Processing:** Removes leading zeros for API calls while preserving display
  - **Memory Efficient:** Optimized DOM queries and event handling

## Installation

No special installation required. Simply clone the repository:

```bash
git clone https://github.com/abdelhakim-sahifa/random-number.git
cd random-number
```

## Usage

### Basic Usage
1. Open `index.html` in your web browser
2. **Generate Numbers:** 
   - Hover over the number display
   - Click the number display
   - Press the spacebar key
3. **Customize Range:** Use the range controls in the top-right corner
4. **View History:** Check recently generated numbers in the bottom-right
5. **Toggle Theme:** Use the moon/sun icon to switch between light/dark modes

### Advanced Features
- **Copy Numbers:** Generated numbers are automatically copied to clipboard
- **History Interaction:** Click any number in history to copy it again
- **Clear Data:** Use the "Clear History" button to reset all stored data
- **Fun Facts:** Read interesting facts about generated numbers (when available)

### Keyboard Shortcuts
- **Spacebar:** Generate a new random number
- **Click History:** Copy historical numbers instantly

## File Structure

```
random-number/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Complete JavaScript functionality
├── README.md          # Project documentation
└── CHANGELOG.md       # Detailed version history
```

## API Integration

The application integrates with a custom fun facts API:

- **Endpoint:** `https://numfunfacts.vercel.app/fact/{number}`
- **Technology:** Powered by Gemini AI for intelligent fact generation
- **Fallback:** Graceful handling when API is unavailable
- **Processing:** Automatic removal of leading zeros for API compatibility

## Browser Support

- **Modern Browsers:** Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Clipboard API:** Supported with fallbacks for older browsers
- **Local Storage:** Required for preferences and history persistence
- **Responsive Design:** Tested on desktop, tablet, and mobile viewports

## Technical Requirements

- **JavaScript:** ES6+ features (classes, async/await, arrow functions)
- **CSS:** CSS3 with flexbox and transitions
- **Storage:** Local Storage API for data persistence
- **Network:** Optional internet connection for fun facts feature

> ⚠️ **Note:** Some browsers may require user permission for clipboard operations. The app includes multiple fallback methods for maximum compatibility.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

---

*Created by [@Abdelhakim-Sahifa](https://github.com/abdelhakim-sahifa)*


![the random number!](https://i.ibb.co/L6DYJzw/image-removebg-preview-2.png)



This project generates random numbers on mouse hover over a label, with a transition effect to showcase the number.



## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Demo

You can view a live demo of the project [here](https://abdelhakim-sahifa.github.io/random-number/).

## Updates in Code (*06-03-2025*)


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



## Features

- Generates a random 4-digit number on mouse hover.
- Transition effects on number change.
- Copy to clipboard functionality .
- New: Dark Mode

## Installation

There's no specific installation required to run this project. Simply clone the repository or download the files.

```bash
git clone https://github.com/abdelhakim-sahifa/random-number.git
```

## Usage

1. Open `index.html` in your browser.
2. Hover over the number label to see it change randomly.
3. The random number will be automatically copied to your clipboard 




> ⚠️ **Note:** Some browsers may require user permission before allowing the copy operation.



### Notes:

- Replace `[here](https://abdelhakim-sahifa.github.io/random-number/)` with the actual link to your live demo.


- Adjust the sections or add more details as per your project's requirements.

Feel free to customize it further based on additional features or specific details you want to highlight about your project!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.




---

*Created by [@Abdelhakim-Sahifa](https://github.com/abdelhakim-sahifa)*



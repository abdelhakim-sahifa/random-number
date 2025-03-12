

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

## Updates in Code (*12-03-2025*)


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



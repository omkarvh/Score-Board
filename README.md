Cricket Score Board
Overview
The Cricket Score Board is a simple web application designed to track and display cricket match scores, wickets, and overs. This interactive tool is ideal for monitoring the progress of a cricket game, making it easy to update scores, record wickets, and keep track of overs and total balls.

Features
Score Tracking: Update the total score with runs (1, 2, 4, or 6) and track the number of wickets fallen.
Overs Calculation: Automatically calculate and display the overs completed during the match.
Control Panel: Buttons to increment runs, record wickets, and handle wides.
Dynamic Updates: The score board updates in real-time as you interact with the control panel.
Technologies Used
HTML: Provides the structure for the score board and control panel.
CSS: Styles the visual elements of the score board and buttons.
JavaScript: Handles the logic for updating scores, wickets, and overs based on user interactions.
Setup
To use the Cricket Score Board locally, follow these steps:

Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/Cricket-Score-Board.git
Navigate to the Project Directory:

bash
Copy code
cd Cricket-Score-Board
Open index.html in Your Web Browser:

Double-click on index.html to view the score board in your browser.
File Structure
index.html: Contains the HTML structure for the score board and control panel.
style.css: Provides styling for the score board and buttons.
index.js: Implements the functionality for updating scores, wickets, and overs.
Code Explanation
HTML (index.html):

<h1>: Displays the title of the score board.
<div class="container">: Contains sections for score, wickets, overs, and total balls.
<button>: Buttons for different cricket actions like scoring runs and recording wickets.
JavaScript (index.js):

Variables: Stores references to HTML elements and keeps track of scores, wickets, and overs.
Functions:
Run1(), Run2(), Run4(), Run6(): Update the score and total balls based on runs scored.
Wide(): Updates the score for a wide ball.
Wicket(): Records a wicket and checks if the game is over.
over(): Calculates and updates the number of overs completed.
To Do
Implement keyboard support for updating scores and wickets.
Enhance the user interface with additional features like player names and team details.
Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to open issues or submit pull requests.

License
This project is licensed under the MIT License.

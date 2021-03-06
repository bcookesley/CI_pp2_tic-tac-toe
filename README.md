# <strong>Tic Tac Toe</strong>

![Mockup Image](docs/am-i-responsive.png)

(Developer: Ben Cookesley)

[Live Webpage](https://bcookesley.github.io/CI_pp2_tic-tac-toe/)




# Table of Contents
1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Stories](#user-stories)
    3. [Site Owner Stories](#site-owner-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colour)
    3. [Font](#font)
    4. [Layout](#layout)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-and-tools)
5. [Features](#features)
    1. [Start Page](#start-page)
    2. [Game Page](#game-page)
    3. [Winner Page](#winner-page)
6. [Testing](#testing)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](#css-validation)
    3. [JavaScript Validation](#javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Performance Test on Various Devices](#performance-test-on-various-devices)
    7. [Browser Compatability](#browser-compatability)
    8. [User Story Testing](#user-story-testing)
7. [Bugs](#bugs)
8. [Deployment](#deployment)
9. [Credits](#credits)
10. [Acknowledgements](#acknowledgements)




# Project Goals
Tic Tac Toe (or Noughts and Crosses in the UK) is a familiar game that we all remember from our childhood. Here, you can challenge a truly great opponent - the computer. The computer will randomly pick boxes to put a "O" in and the user will play "X" and then strategy will ensue. 
The object of the game is to get a row of three "X's" or three "O's" in any direction and once the user or the computer has achieved this, the game is over. Keep track of your score and keep playing the computer until you win, or hopefully, win all the time. 

### User Goals
- Playing a quick, fun and easy game against the computer or a friend
- Easily keep track of score, wins and losses
- Clean easy to see and use website and game 

### Site Owner Goals
- Provide an easy to play game of Tic Tac Toe (Noughts and Crosses in the UK)
- Allow the user to play a game of Tic Tact Toe against the computer 
- Allow the user to keep score of their wins and losses
- Provide a simple and easy to see and play game layout for the user 

## User Experience 

### Target Audience 
- Casual gamers 
- People who like the classic game of tic-tac-toe
- People looking for a quick and easy game to play


### User Stories 

- As a user, I want to play a game of Tic Tac Toe against the computer
- As a user, I want to see some game play information 
- As a user, I want to to be able to replay the game without having to refresh the page
- As a user, I want to contact someone about the game 

### Site Owner Stories 

 - As a site owner, I want users to be able to play a quick game of Tic Tac Toe
 - As a site owner, I want users to be able to replay the game without having to refresh the page
 - As a site owner, I want users to be able to clearly see some basic info on the game


# Design 

### Design choices 

This game was designed with simplicity in mind. As this is a classic, retro, easy to play game - the design should reflect this. Not having an overly complicated design or an overwhelming amount of features keeps the design of this game simple and intuitive - and more importantly, easy to play.

### Colour 

### Font 

Fonts used for this website were used from Google fonts. A choice for Quicksand was made with a backup of sans-serif as this conveyed and inkeeping with the simple, user-friendly design of the site. 

### Layout 

The sites layout is designed in a simple fashion that is user friendly and intuitive. When arriving at the site you are greeted with a simple start oage that includes some basic information about the game and a button to enter into the game. The site consists of 3 pages.

 - A main page with 3 separate views:
     - A start page with some basic game instructions and information
     - A game page featuring a game board to play the game
     - A winnning page that alerts the user of the winnner of the game
- A contact page 
 - 404 page

# Technologies Used

### Languages 

- HTML 
- CSS
- JavaScript

### Frameworks and Tools

- Git 
- GitHub
- GitPod
- Favicon.io
- Balsamiq
- Google Fonts
- Lighthouse
- W3C Markup Validation Service
- W3C Jigsaw CSS Validation Service

interaciveness 
notification 
feedback 
validation 
responsiveness


emailJS


### Wireframes

<details><summary>Start Page</summary>
<image src="docs/wireframes/Starting Page - Tic Tac Toe.png">
</details>

<details><summary>Game Page</summary>
<image src="docs/wireframes/Game Page - Tic Tac Toe.png">
</details>

<details><summary>Winning Page</summary>
<img src="docs/wireframes/Winning Page - Tic Tac Toe.png">
</details>



# Features

### Start Page 

- Provides instructions on the game and a button to start the game 
- Once clicked the start screen disappears and shows you the game board

### Game Page 

- Game board shown with 9 boxes to fill with an X or and O
- Header text showing which players turn it is 
- When a player has had their turn the respective text is highlighted 


### Winning Page 

- Once a player has won a winning page is displayed with either 'Player X' or 'Player O won the game'
- A draw screen also appears in the same style when a draw has been reached

### Footer 

- Displayed on all pages
- Shows links to social media and the contact page 



# Testing 

### HTML Validation 

<details><summary>Main Page</summary>
<image src="docs/validations/html/html-validation.png">
</details>

### CSS Validation 

<details><summary>Styles</summary>
<img src="docs/validations/css/css-validation.png">
</details>

### JavaScript Validation 

<details><summary>Script</summary>
<img src="docs/validations/javascript/javascript-validation.png">
</details>

### Accessibility

<details><summary>Main Page</summary>
<img src="docs/validations/performance/main-page.png">
</details>

<details><summary>Contact Page</summary>
<img src="docs/validations/performance/contact-page.png">
</details>

### Performance 

### Performance Test on Various Devices 

In addition to the tests done on Chrome Developer tools this website was also tested on:

- Samsung Galaxy S10 & S20 
- Apple iPad 

### Browser Compatability 

This website was tested on the following browsers:

- Mozilla Firefox 
- Google Chrome 

### User Story Testing 

1. As a user, I want to play a game of Tic Tac Toe against the computer

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
|  Play Game | Navigate to game board and play game | Play game against computer | Worked as expected |


2. As a user, I want to see some gameplay information 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Start Page  | Navigate to site and see game info | See info on start page | Worked as expected |


3. As a user, I want to be able to replay the game without having to refresh the page

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Winning Page | Win, lose or draw game | See winning page pop up when game is over | Worked as expected |


4. As a user, I want to contact someone about the game 

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Navigate to footer at bottom of page | Find the contact us button | Worked as expected |


### Site Owner Story Testing 

5. As a site owner, I want users to be able to play a quick game of Tic Tac Toe

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Site | Navigate to site | Find the game of Tic Tac Toe | Worked as expected |


6. As a site owner, I want users to be able to replay the game without having to refresh the page

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Winning Page | Win, lose or draw the game | Winning page pops up with a play again button | Worked as expected |


7. As a site owner, I want users to be able to clearly see some basic info on the game

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Start page | Navigate to site and see game info | Find game info on start page | Worked as expected |



# Bugs 

- Iteration through winning and draw functions not working correctly. Code continues to be executed after the result is drawn. 



# Deployment 

This website was deployed using GitHub Pages following these steps:

1. In the GitHub repository click on the settings tab at the top
2. On the left menu scrtoll down and select pages
3. For the source select 'main'
4. The webpage will refresh and display a highlighted section with a message stating: "Your website is published at https://bcookesley.github.io/CI_pp1_country-walks/" 

The repository can be forked by following these steps: 

1. Go to the GitHub repository
2. Click on fork in the top right hand corner


To clone the repository:

1. Go to the GitHub repository
2. Click on where it says 'Code' at the top of the repository
3. Select to clone either HTML, SSH or GitHub CLI
4. Go to the working directory you wish to work from
5. Go to Git Bash
6. Type git clone and paste the URL from your clipboard ($ git clone https://github.com/USERNAME/REPOSITORY)
7. Press enter to create your clone



# Credits 

### JavaScript 

- JavaScript Academy for the code and the walk through of how to make the game - https://www.youtube.com/channel/UCicOwFWkuMX0ddFaKCc_E5Q
    - Link to video - https://www.youtube.com/watch?v=B3pmT7Cpi24
- Codepen Player vs Computer Tic Tac Toe - https://codepen.io/lando464/pen/BPGEKO
- Kris Foster - https://www.youtube.com/watch?v=TD5EaIkhSTQ
- Code Institute - Love Maths walkthrough project 
- Coding Nepal - https://www.codingnepalweb.com/tic-tac-toe-game-javascript/
- Code Now - https://www.youtube.com/watch?v=5cI0unBbAho&t=1990s (Winning and draw functions logic)
- EmailJS - Code snippet used for form submission - https://www.emailjs.com/docs/tutorial/creating-contact-form/


### Design 
Some design elements are influenced by the below credits.
- Code Now - https://www.youtube.com/watch?v=5cI0unBbAho&t=1990s


# Acknowledgements 

I would like to thank the following people for their support through this project. 

- Code institute for the tutor time and example project to help as a guide 
- Mo Shami for the words of wisdom and guidance 
- My partner Cazz for her continuous love and support

### Notes 

- Due to sickness this project could not be completed abd had to be handed in for a deadline 

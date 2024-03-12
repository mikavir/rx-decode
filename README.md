# [RX DECODER](https://mikavir.github.io/rx-decoder)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/mikavir/rx-decoder)](https://github.com/mikavir/rx-decoder/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/mikavir/rx-decoder)](https://github.com/mikavir/rx-decoder/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/mikavir/rx-decoder)](https://github.com/mikavir/rx-decoder)

🛑🛑🛑🛑🛑🛑🛑🛑🛑START OF NOTES (to be deleted)

GitHub now supports CALLOUTS in Markdown files.
There are some callouts already embedded in this application for you.
However, if you feel that you want to add more, there are certain ones you can use.

NOTE: the preview for callouts isn't yet supported in Gitpod/Codeanywhere/VSCode/etc.
You'll have to commit/push the changes to GitHub to see it in action.

> [!NOTE]  
> BLUE: Highlights information that users should take into account, even when skimming.

> [!TIP]
> GREEN: Optional information to help a user be more successful.

> [!IMPORTANT]  
> PURPLE: Crucial information necessary for users to succeed.

> [!WARNING]  
> YELLOW: Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> RED: Negative potential consequences of an action.

Source: https://github.com/orgs/community/discussions/16925

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)
![screenshot](documentation/mockup.png)
*Please see the responsiveness using [Am I Responsive](https://ui.dev/amiresponsive?url=http://mikavir.github.io/rx-decoder)*



**Rx Decoder:** Unlock the *Formula*, Master the *Cure*!

A responsive interactive game that can be used in a range of devices. It is aimed for medical professionals to test their expertise in drug names by making them guess the name of the drug with helpful drug actions.


## UX



### Colour Scheme

After researching healthcare web applications, I've discovered that specific colors are recommended for use. Among them, blue stands out as particularly advantageous due to its ability to evoke feelings of trust and security. Incorporating the color blue into the design can foster associations with medical professionalism, enhancing user confidence and comfort. Additionally, I've examined medical websites like [BMJ](https://www.bmj.com/) and the [NHS](https://www.nhs.uk/), drawing inspiration from their use of blue hues. This analysis has helped me determine the most suitable shade of blue to incorporate into the web application's design, aligning it with established standards and user expectations within the healthcare field.

- `#333` used for primary text.
- `#2a6ebb` used for primary highlights.

I used [coolors.co](https://coolors.co/2a6ebb-97b6da-ffffff-333333) to generate my colour palette.

![screenshot](documentation/rx-decoder.png)

These colors serve as visual cues for user feedback on their answers: green signifies correctness, while red indicates an incorrect response.

I have used [coolors.co](https://coolors.co/007f3b-ff0000) to generate these colours.

![screenshot](documentation/rx-decoder-1.png)


### Typography

Based on research from the [Print Authority](https://theprintauthority.com/best-fonts-for-medical-printed-materials/), I've identified fonts commonly utilized in healthcare-related writing or web applications. One prominent example is QuickSands, which stands out due to its rounded terminals, enhancing readability. Opting for a font traditionally employed in healthcare communication fosters a sense of familiarity within the medical community. By leveraging such fonts, this game aims to resonate more effectively with its target audience, primarily medical professionals. 

- [Quicksands](https://fonts.google.com/specimen/Quicksand) was used for all text.

- [Font Awesome](https://fontawesome.com) icons were used throughout the site, such as the social media icons in the footer and the buttons.


## User Stories


### New Site Users

- As a new game user, I would like to see a memorable logo, so that I can remember the game.
- As a new game user, I would like to see instructions, so that I can know how to play the game.
- As a new game user, I would like to see a contact information, so that I can email when I have questions.
- As a new game user, I would like to have hints, so that I can easily play the game.
- As a new game user, I would like to be able to easily quit the game, so that I can stop playing the game as desired.

### Returning Site Users

- As a returning game user, I would like to have different categories, so that I can challenge myself more.
- As a returning game user, I would like to have a log of my scores, so that I can remember how well I did.
- As a returning game user, I would like to see contact information, so that I can contact the developer if I encounter any bugs.


## Wireframes

To follow best practice, wireframes were developed for mobile, tablet, and desktop sizes.
I've used [Balsamiq](https://balsamiq.com/wireframes) to design my site wireframes.

### Mobile Wireframes

<details>
<summary> Click here to see the Mobile Wireframes </summary>

Menu
  - ![screenshot](documentation/wireframes/menu-page-mobile.png)

Game
  - ![screenshot](documentation/wireframes/game-page-mobile.png)

Results
  - ![screenshot](documentation/wireframes/results-page-mobile.png)

Contact
  - ![screenshot](documentation/wireframes/contact-page-mobile.png)


</details>

### Tablet Wireframes

<details>
<summary> Click here to see the Tablet Wireframes </summary>

Menu
  - ![screenshot](documentation/wireframes/menu-page-tablet.png)

Game
  - ![screenshot](documentation/wireframes/game-page-tablet.png)

Results
  - ![screenshot](documentation/wireframes/results-page-tablet.png)

Contact
  - ![screenshot](documentation/wireframes/contact-page-tablet.png)

</details>

### Desktop Wireframes

<details>
<summary> Click here to see the Desktop Wireframes </summary>

Menu
  - ![screenshot](documentation/wireframes/menu-page-desktop.png)

Game
  - ![screenshot](documentation/wireframes/game-page-desktop.png)

Results
  - ![screenshot](documentation/wireframes/results-page-desktop.png)

Contact
  - ![screenshot](documentation/wireframes/contact-page-desktop.png)

</details>

## Features

### Existing Features

- **Logo**

    - Incorporating a logo into the game design can offer a powerful visual symbol that resonates with users, fostering a memorable connection to the game. By utilizing a logo with a color scheme harmonious with the game's aesthetic, coherence is maintained, providing users with a consistent and cohesive experience. This approach not only aims to appeal to the intended audience of medical professionals by presenting a clinical image but also contributes to establishing a unique identity for the game itself.

![screenshot](documentation/features/feature01.png)

- **Start Modal**

    - The start modal serves as the initial display of the game, presenting a clear layout of its mechanics. Users are prompted to begin gameplay by selecting one of the categorized buttons, while also having the option to access instructions through a dedicated button. It sets expectations by communications the goals and rewards of the game.

![screenshot](documentation/features/feature02.png)

- **"How to Play" Modal**

    - The "How to Play" modal provides clear instructions on the rules and gameplay mechanics, ensuring that players understand how to play the game correctly and avoid confusion or frustration. It helps newcomers understand the game mechanics of the drag and drop, and objectives quickly and efficiently, reducing the learning curve and enhancing their overall gaming experience.

![screenshot](documentation/features/feature03.png)

- **"Contact" button**

    - A contact button that's easy to find in the game helps players access help when they need it. Putting it in a visible spot shows that the game cares about its players and can boost its reputation.

![screenshot](documentation/features/feature04.png)

- **"Contact" Modal**

    - The implentation of contact modal in a game allows players to easily get help and report issues, improving their experience. It encourages players to engage with developers and ensures accessibility for all. This is beneficial for the developer as they can receive feedback on the game. When user have filled the contact form, they will receive a auto-reply email for confirmation that their form had submitted. Otherwise, error messages will appear.

![screenshot](documentation/features/feature05.png)

- **"Go Back to Game" Button**

    - Including a "Go Back to Game" button on the contact screen enables users to return to their game session seamlessly. This feature instills confidence in users when reporting bugs or issues, as they know they can easily resume their gameplay afterward.
    
![screenshot](documentation/features/feature06.png)

- **"Hint" Button and Section**

    - Implementing a "Hint Button" enables players to receive assistance when they're stuck, reducing frustration and improving their chances of completing the game. The hints, which outline drug actions, aid medical professionals in identifying unfamiliar medications and offer a learning opportunity for those unfamiliar with drug actions.
    
![screenshot](documentation/features/feature07.png)

- **"Exit Game" Button**

    - The "Exit Game" button will allow users to quit the game. Its presence will improve user experience as it will allow users to control their gaming sessions and choose when to end them, enhancing their overall satisfaction and autonomy. Having a clearly labeled exit button helps prevent player frustration by eliminating the need for complex or time-consuming steps to exit the game.
    
![screenshot](documentation/features/feature08.png)

- **Lives and Dissapearing Hearts Animation**

    - The game features five lives represented by hearts. When a mistake is made while guessing the word, the user loses a life, and a heart vanishes using jQuery animation. The limited number of lives adds a sense of challenge and excitement, prompting players to strategize and persevere to advance in the game. Conserving lives and conquering challenging drug names enhances the gaming experience, making their wins feel more rewarding.

![screenshot](documentation/features/feature09.png)

- **Progress Tracker**

    - The game incorporates a progress tracker, indicating both the number of drugs guessed and those remaining, aiding users in tracking their progress and setting goals to decipher the remaining drug names. Moreover, the displayed drug titles adapt based on the chosen category, for instance, displaying "cardiac drug" if the cardiac category is selected.

![screenshot](documentation/features/feature10.png)

- **Game Over Modal**

    -This modal appears when the user quits or loses the game. It showcases a confetti of emojis, generated through [js-confetti](https://www.npmjs.com/package/js-confetti), tailored to the situation. When the user quits, a "crying emoji" 😭 is displayed, while losing lives prompts a "skull and crossbones" ☠️. This feature provides visual feedback to enhance user engagement and also highlights the drug names guessed by the user, recognizing their achievements. 

    -The messages in the game over modal also differs in depending on the number of words that the user have guessed.
    
    *No words guessed* :
    "Boohoo! You have guessed none of the drugs. Time to read the British National Formulary (BNF)"

    *1 words guessed* : 
    "Well done! You have guessed a drug. Read theBritish National Formulary (BNF) to learn more drugs"

    *More than 1 word* :
    "Well Done! You have guessed (*number of drugs*) drugs. Call yourself a master of drugs"


![screenshot](documentation/features/feature11.png)

- **Won Game modal**

    - When the user successfully guesses all the drug names, the "Won Game" modal appears, accompanied by a confetti of emojis resembling pills 💊 using [js-confetti](https://www.npmjs.com/package/js-confetti). This modal serves to recognize the user's achievement and celebrate their success. It includes a call-to-action prompting users to try another category, encouraging them to stay engaged with the game.

![screenshot](documentation/features/feature12.png)

- **Play Again Button**

    - The "Play Again" button enables users to replay the game by reloading the page back to the "Start Modal". Conveniently placed within both the "Game Over" and "Won Game" modals, it encourages users to engage in another round of gameplay.
    
![screenshot](documentation/features/feature13.png)

- **Drag and Drop Game Area**

    - The use of "Drag and Drop" mechanics encourages accesibility as it is easy to understand increasing to wider target audience. 
    
![screenshot](documentation/features/feature14.png)


### Future Features

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 START OF NOTES (to be deleted)

Do you have additional ideas that you'd like to include on your project in the future?
Fantastic! List them here!
It's always great to have plans for future improvements!
Consider adding any helpful links or notes to help remind you in the future, if you revisit the project in a couple years.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

- {{ YOUR-TITLE-FOR-FUTURE-FEATURE-#1 }}
    - Any additional notes about this feature.
- {{ YOUR-TITLE-FOR-FUTURE-FEATURE-#2 }}
    - Any additional notes about this feature.
- {{ YOUR-TITLE-FOR-FUTURE-FEATURE-#3 }}
    - Any additional notes about this feature.

## Tools & Technologies Used

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 START OF NOTES (to be deleted)

In this section, you should explain the various tools and technologies used to develop the project.
Make sure to put a link (where applicable) to the source, and explain what each was used for.
Some examples have been provided, but this is just a sample only, your project might've used others.
Feel free to delete any unused items below as necessary.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

- ⚠️⚠️ REQUIRED <-- delete me ⚠️⚠️
- [![Git](https://img.shields.io/badge/Git-grey?logo=git&logoColor=F05032)](https://git-scm.com) used for version control. (`git add`, `git commit`, `git push`)
- [![Git](https://img.shields.io/badge/GitHub-grey?logo=github&logoColor=181717)](https://github.com) used for secure online code storage.
- ⚠️⚠️ CHOOSE ONLY ONE <-- delete me ⚠️⚠️
- [![Gitpod](https://img.shields.io/badge/Gitpod-grey?logo=gitpod&logoColor=FFAE33)](https://gitpod.io) used as a cloud-based IDE for development.
- [![Codeanywhere](https://img.shields.io/badge/Codeanywhere-grey?logo=ebox&logoColor=7F3F98)](https://codeanywhere.com) used as a cloud-based IDE for development.
- [![VSCode](https://img.shields.io/badge/VSCode-grey?logo=visualstudiocode&logoColor=007ACC)](https://code.visualstudio.com) used as my local IDE for development.
- ⚠️⚠️ CHOOSE ALL APPLICABLE <-- delete me ⚠️⚠️
- [![HTML](https://img.shields.io/badge/HTML-grey?logo=html5&logoColor=E34F26)](https://en.wikipedia.org/wiki/HTML) used for the main site content.
- [![CSS](https://img.shields.io/badge/CSS-grey?logo=css3&logoColor=1572B6)](https://en.wikipedia.org/wiki/CSS) used for the main site design and layout.
- [![JavaScript](https://img.shields.io/badge/JavaScript-grey?logo=javascript&logoColor=F7DF1E)](https://www.javascript.com) used for user interaction on the site.
- [![Python](https://img.shields.io/badge/Python-grey?logo=python&logoColor=3776AB)](https://www.python.org) used as the back-end programming language.
- ⚠️⚠️ CHOOSE ONLY ONE <-- delete me ⚠️⚠️
- [![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-grey?logo=githubpages&logoColor=222222)](https://pages.github.com) used for hosting the deployed front-end site.
- [![Heroku](https://img.shields.io/badge/Heroku-grey?logo=heroku&logoColor=430098)](https://www.heroku.com) used for hosting the deployed back-end site.
- ⚠️⚠️ CHOOSE ONLY ONE (if applicable) <-- delete me ⚠️⚠️
- [![Bootstrap](https://img.shields.io/badge/Bootstrap-grey?logo=bootstrap&logoColor=7952B3)](https://getbootstrap.com) used as the front-end CSS framework for modern responsiveness and pre-built components.
- [![Materialize](https://img.shields.io/badge/Materialize-grey?logo=materialdesign&logoColor=F5A5A8)](https://materializecss.com) used as the front-end CSS framework for modern responsiveness and pre-built components.
- ⚠️⚠️ CHOOSE ALL APPLICABLE <-- delete me ⚠️⚠️
- [![Flask](https://img.shields.io/badge/Flask-grey?logo=flask&logoColor=000000)](https://flask.palletsprojects.com) used as the Python framework for the site.
- [![MongoDB](https://img.shields.io/badge/MongoDB-grey?logo=mongodb&logoColor=47A248)](https://www.mongodb.com) used as the non-relational database management with Flask.
- [![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-grey?logo=sqlalchemy&logoColor=D71F00)](https://www.sqlalchemy.org) used as the relational database management with Flask.
- [![Django](https://img.shields.io/badge/Django-grey?logo=django&logoColor=092E20)](https://www.djangoproject.com) used as the Python framework for the site.
- [![PostgreSQL](https://img.shields.io/badge/PostgreSQL-grey?logo=postgresql&logoColor=4169E1)](https://www.postgresql.org) used as the relational database management.
- [![PostgreSQL by Code Institute](https://img.shields.io/badge/PostgreSQL_by_Code_Institute-grey?logo=okta&logoColor=F05223)](https://dbs.ci-dbs.net) used as the Postgres database from Code Institute.
- [![ElephantSQL](https://img.shields.io/badge/ElephantSQL-grey?logo=postgresql&logoColor=36A6E2)](https://www.elephantsql.com) used as the Postgres database.
- [![Cloudinary](https://img.shields.io/badge/Cloudinary-grey?logo=cloudinary&logoColor=3448C5)](https://cloudinary.com) used for online static file storage.
- [![WhiteNoise](https://img.shields.io/badge/WhiteNoise-grey?logo=python&logoColor=FFFFFF)](https://whitenoise.readthedocs.io) used for serving static files with Heroku.
- [![Stripe](https://img.shields.io/badge/Stripe-grey?logo=stripe&logoColor=008CDD)](https://stripe.com) used for online secure payments of ecommerce products/services.
- [![AWS S3](https://img.shields.io/badge/AWS_S3-grey?logo=amazons3&logoColor=569A31)](https://aws.amazon.com/s3) used for online static file storage.

## Testing

> [!NOTE]  
> For all testing, please refer to the [TESTING.md](TESTING.md) file.

## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://github.com/mikavir/rx-decoder), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://mikavir.github.io/rx-decoder)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/mikavir/rx-decoder) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/mikavir/rx-decoder.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/mikavir/rx-decoder)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/mikavir/rx-decoder)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

### Local VS Deployment

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

Use this space to discuss any differences between the local version you've developed, and the live deployment site on GitHub Pages.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

## Credits

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

In this section you need to reference where you got your content, media, and extra help from.
It is common practice to use code from other repositories and tutorials,
however, it is important to be very specific about these sources to avoid plagiarism.

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

### Content

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

Use this space to provide attribution links to any borrowed code snippets, elements, or resources.
A few examples have been provided below to give you some ideas.

Ideally, you should provide an actual link to every resource used, not just a generic link to the main site!

⚠️⚠️ EXAMPLE LINKS - REPLACE WITH YOUR OWN ⚠️⚠️

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

| Source | Location | Notes |
| --- | --- | --- |
| [Markdown Builder](https://tim.2bn.dev/markdown-builder) | README and TESTING | tool to help generate the Markdown files |
| [Chris Beams](https://chris.beams.io/posts/git-commit) | version control | "How to Write a Git Commit Message" |
| [W3Schools](https://www.w3schools.com/howto/howto_js_topnav_responsive.asp) | entire site | responsive HTML/CSS/JS navbar |
| [W3Schools](https://www.w3schools.com/howto/howto_css_modals.asp) | contact page | interactive pop-up (modal) |
| [W3Schools](https://www.w3schools.com/css/css3_variables.asp) | entire site | how to use CSS :root variables |
| [Flexbox Froggy](https://flexboxfroggy.com/) | entire site | modern responsive layouts |
| [Grid Garden](https://cssgridgarden.com) | entire site | modern responsive layouts |
| [StackOverflow](https://stackoverflow.com/a/2450976) | quiz page | Fisher-Yates/Knuth shuffle in JS |
| [YouTube](https://www.youtube.com/watch?v=YL1F4dCUlLc) | leaderboard | using `localStorage()` in JS for high scores |
| [YouTube](https://www.youtube.com/watch?v=u51Zjlnui4Y) | PP3 terminal | tutorial for adding color to the Python terminal |
| [strftime](https://strftime.org) | CRUD functionality | helpful tool to format date/time from string |
| [WhiteNoise](http://whitenoise.evans.io) | entire site | hosting static files on Heroku temporarily |

### Media

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

Use this space to provide attribution links to any images, videos, or audio files borrowed from online.
A few examples have been provided below to give you some ideas.

If you're the owner (or a close acquaintance) of all media files, then make sure to specify this.
Let the assessors know that you have explicit rights to use the media files within your project.

Ideally, you should provide an actual link to every media file used, not just a generic link to the main site!
The list below is by no means exhaustive. Within the Code Institute Slack community, you can find more "free media" links
by sending yourself the following command: `!freemedia`.

⚠️⚠️ EXAMPLE LINKS - REPLACE WITH YOUR OWN ⚠️⚠️

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

| Source | Location | Type | Notes |
| --- | --- | --- | --- |
| [Pexels](https://www.pexels.com) | entire site | image | favicon on all pages |
| [Lorem Picsum](https://picsum.photos) | home page | image | hero image background |
| [Unsplash](https://unsplash.com) | product page | image | sample of fake products |
| [Pixabay](https://pixabay.com) | gallery page | image | group of photos for gallery |
| [Wallhere](https://wallhere.com) | footer | image | background wallpaper image in the footer |
| [This Person Does Not Exist](https://thispersondoesnotexist.com) | testimonials | image | headshots of fake testimonial images |
| [Audio Micro](https://www.audiomicro.com/free-sound-effects) | game page | audio | free audio files to generate the game sounds |
| [Videvo](https://www.videvo.net/) | home page | video | background video on the hero section |
| [TinyPNG](https://tinypng.com) | entire site | image | tool for image compression |

### Acknowledgements

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-START OF NOTES (to be deleted)

Use this space to provide attribution to any supports that helped, encouraged, or supported you throughout the development stages of this project.
A few examples have been provided below to give you some ideas.

⚠️⚠️ EXAMPLES ONLY - REPLACE WITH YOUR OWN ⚠️⚠️

🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑-END OF NOTES (to be deleted)

- I would like to thank my Code Institute mentor, [Tim Nelson](https://github.com/TravelTimN) for his support throughout the development of this project.
- I would like to thank the [Code Institute](https://codeinstitute.net) tutor team for their assistance with troubleshooting and debugging some project issues.
- I would like to thank the [Code Institute Slack community](https://code-institute-room.slack.com) for the moral support; it kept me going during periods of self doubt and imposter syndrome.
- I would like to thank my partner (John/Jane), for believing in me, and allowing me to make this transition into software development.
- I would like to thank my employer, for supporting me in my career development change towards becoming a software developer.

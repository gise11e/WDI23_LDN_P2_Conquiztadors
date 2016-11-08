# Project #2: A Full-stack Application:                                                         CONQUIZTADOR - Playing for Global Domination


## Introduction

DREAM TEAM: Jamie Simpsonn, Luke Hammond, Gi, John Evans.

Conquiztador: a game in which a player(s) take control of countries and terretories across the world by accumulating points by correctly answering questions about the countries they are seeking to conquer.



### Overview

This second project will **build a full-stack RESTful application** that includes a **Google Map** and an **authenticated User**.

This solution will be **built using an Express application** that has a **Mongo** database using the **Mongoose ORM**.

The solution will be developed by a team of four using Git in support of version control and output coordination. 

The solution will be developed with the use of tools such as Trello to support project planning and task coordination and wireframes before the devlepment of user stories defining what users will do with the app. The outcomes and scope of requirements will be prioritised using the MoSCoW technique.


---

### Technical Requirements

The app MUST:

* **Have at _least_ 2 models** – one representing a user and one that represents the main resource of your app, e.g. Restaurants
* **The app should include authentication** - with encrypted passwords & an authorization flow
* **Have complete RESTful routes** for at least one of your resources with GET, POST, PUT, PATCH, and DELETE
* **You must use include a Google Map**
* **You must use SASS** - as this is a key industry skill
* **Include wireframes** - that you designed before building the app
* Have **semantically clean HTML** - you make sure you write HTML that makes structural sense rather than thinking about how it might look, which is the job of CSS.
* **Include data from an API** - to make your app more dynamic, you might want to add some data from an API. You might need to consider CORS issues with AJAX and/or the need to store this external data in your app.
* **Be deployed online** and accessible to the public
---

### Necessary Deliverables

* A **working full-stack application** - hosted somewhere on the internet
* A **link to your hosted working app** - in the URL section of your Github repo
* A **git repository hosted on Github** - with a link to your hosted project and frequent commits dating back to the **very beginning** of the project. Commit early, commit often.
* **A `readme.md` file** - with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
* **Wireframes of your app** - hosted somewhere & linked in your `readme.md`

---

### Key Plannng Activities

* **Begin with the end in mind.** Know where you want to go by planning with wireframes & user stories, so you don't waste time building things you don't need
* **Don’t hesitate to write throwaway code to solve short term problems**
* **Read the docs for whatever technologies you use.** Most of the time, there is a tutorial that you can follow, but not always, and learning to read documentation is crucial to your success as a developer
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **User stories and/or wireframes define what a specific type of user wants to accomplish with your application**. It's tempting to just make them _todo lists_ for what needs to get done, but if you keep them small & focused on what a user cares about from their perspective, it'll help you know what ot build
* **Write pseudocode before you write actual code.** Thinking through the logic of something helps.

---

### Outline of Application Requirements and Prioritisation

__MUST HAVE Application Requirements:__

* Single player game. (MUST HAVE)
* On subsequent turn, player selects next country to conquer. (MUST HAVE)
* Player to conquer country and gain territory based on correct answer to questions about country. (MUST HAVE)
* For small countries 5 questions, medium 10 questions,large 40 questions to be answered rounds of 4. (MUST HAVE)
* Questions will start with facts such as flag, population range etc. and gain increasing difficulty. (MUST HAVE)
* Player will accumulate points for each correct answer. (MUST HAVE)
* Correct answer to question by player will be indicated by flag pinned within country representing player (MUST HAVE)
* Player answering all questionss correctly will take control of country and gain territory. (MUST HAVE)
* Player unable to answer all questions correctly will accumulate points but will not take control of country, but can move on to another country to try to take control by correctly answering all questions. (MUST HAVE)
* Player score and countries conquered will be displayed (MUST HAVE)

__SHOULD HAVE Application Requirements:__

* At start country to conquer is selected randomly. (SHOULD HAVE)
* Option for two player game on same device (SHOULD HAVE)

__COULD HAVE Application Requirements:__

* Colour of country respresentation on map to change colour to indicate conquered country for each player. (COULD HAVE)
* Option for two player game on seperate devices (COULD HAVE)
* Timer for answering each question. (COULD HAVE) 

__WON'T HAVE Application Requirements (Out of Scope):__

* To be determined.


---

### Project Feedback + Evaluation - Key measures to be considered

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you added a personal spin or creative element into your project submission? Did you deliver something of value to the end user (not just a login button and an index page)?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors as we have in class?

* __Deployment and Functionality__: Is your application deployed and functional at a public URL? Is your application free of errors and incomplete functionality?


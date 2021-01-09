# First React.js project

This is my first project on learning react in 2020, based on the video series by Mahmoud Shehata on Youtube. His **Learn React in 2020** playlist can be found [here](https://www.youtube.com/watch?v=NJWI1b1upps&list=PLDIXF8nb0VG1v4S-smVy7GV0MHsJ3PJiL).

Each commit will be based on the lesson completed, and any roadblocks or personal lessons learned while completing the series will be listed below.

&nbsp;

---

# Learning moments during this build

-   Lesson 2: create-react-app did not run at first, ran into a JSON parsing error with eslint-plugin. The resolution was doing `npm cache clean --force`, and then the install happened as it normally should.
-   Lesson 3: emotion npm package didn't run the first time. Found that the tutorial didn't include the sub-package of @emotion/react. After doing the following command: `npm i @emotion/react --save-dev`
-   Lesson 5: on adding cold weather background. Decided to adjust his code to make it more readable and S.O.L.I.D from a coding persepctive. Added other functions for setting proper weather gradiant.
-   Lesson 6: decided not to use his switch statement. Been trying to get away from using switch statments. Decided on an image object with references to each type of weather condition that the API can return. Defaults to _Clear_ if no matching weather condition is found.
-   Lesson 7: Connecting weather API to app with _async/await_, got 2 returns of the data in the console log. Thinking this is because of 2 different _await_ happening in the fetch.
-   Lesson 8: Had an error with my code formatting on icon.js, so I had to revert that to get the code to stop erroring. Also consolidated some repeating code ahead of the instructor in an attempt to make the code look more clean.
-   Lesson 9: Cleanup of code, better error handling. No issues
-   Lesson 10: Better error handling and improvements to the UX
-   Lesson 11: Adjusted UX/UI for input field, adjusted some error handling. Added in CSS transition to help show user that the city title can be clicked.
-   Lesson 12: Animations: Added animation packages and loader icons to React
-   Lesosn 13: Adjusted card input functionality with framer motion and styled components

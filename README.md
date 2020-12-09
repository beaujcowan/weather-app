# First React.js project

This is my first project on learning react in 2020, based on the video series by Mahmoud Shehata on Youtube. His **Learn React in 2020** playlist can be found [here](https://www.youtube.com/watch?v=NJWI1b1upps&list=PLDIXF8nb0VG1v4S-smVy7GV0MHsJ3PJiL).

Each commit will be based on the lesson completed, and any roadblocks or personal lessons learned while completing the series will be listed below.

&nbsp;

---

# Learning moments during this build

-   create-react-app did not run at first in Lesson 2, ran into a JSON parsing error with eslint-plugin. The resolution was doing `npm cache clean --force`, and then the install happened as it normally should.
-   emotion npm package form Lesson 3 didn't run the first time. Found that the tutorial didn't include the sub-package of @emotion/react. After doing the following command: `npm i @emotion/react --save-dev`
-   Lesson 5 on adding cold weather background. Decided to adjust his code to make it more readable and S.O.L.I.D from a coding persepctive. Added other functions for setting proper weather gradiant.
-   Lesson 6 decided not to use his switch statement. Been trying to get away from using switch statments. Decided on an image object with references to each type of weather condition that the API can return. Defaults to _Clear_ if no matching weather condition is found.

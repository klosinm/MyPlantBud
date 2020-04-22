# MyPlantBud </br>

A website holding information about house plants. Users can take a quiz to see which plant would be best for their lifestyle or just browse the possible plants they could have.

____________________________________________________________________________________


When the user goes to https://myplantbud.herokuapp.com/MyPlantBud, they will see this page: </br>

<img src="./Images/MPB_mainmenu.png" width="270">

Here, the user can either click on an image of a plant to be directed to a page holding info of the plant, or take a quiz to see which plant would be best suited for their lifestyle. </br>

______________________________________________________________________________

#### Quiz </br>

If the user clicks on "Take Quiz", they will be sent to this page: </br>

<img src="./Images/MPB_quiz.png" width="270">

The user must select an options for all questions, if they don't, they will be alerted of their mistake and told to answer the question(s): </br>

<img src="./Images/MPB_quizwrong.png" width="270">

Otherwise, if the user answered all questions and they click submit, they will go to the verification page, </br>


______________________________________________________________________________

#### Verification </br>

After completing the quiz, the user will be shown a page with their selected options, and then asked if these answers are correct or not. If the user clicks "Maybe not, let me do it again", they will be sent back to the quiz page. </br>
If the user clicks "Yes!", then the respsective plant page will render.

______________________________________________________________________________

#### Plant Page </br>

This is the same page that will show if the user selects from the home screen a plant picture. The page renders based on which plant is called in the URL (the picture below is where the id for the plant Hoya is 5.)

```
https://<span></span>myplantbud.herokuapp.com/plant/{plant id}
```



______________________________________________________________________________
Last Updated: April 2020
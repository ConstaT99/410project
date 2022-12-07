# CS410 Project-- Sentiment Analysis web application

## 1. Requirements
Before opening your browser to try our web application, please download our code and install the necessary packages in your terminal: 

`pip install nltk` `pip install textblob` `pip install flask`

## 2. Host a local server
After installing the necessary packages, in your terminal, go to the sourcecode folder `cd sourcecode` and type in the following `npm start`, `flask run` to host a local server in your computer. After that, you will be able to open the webpage http://localhost:3000 in your browser. 

## 3. How to use our web application
The webpage is very straight forward. A text field is shown on the left where you can enter any sentences, words, or phrases in english. The sentiment analysis result will be shown on the right text field, indicating whether the input text is positive, neutral, or negative. 

## 4. How the web application is implemented
We divided our tasks into frontend and backend implementation. For our frontend, the main task was to create a input text field, ensure that the backend can receive the input text, and display the correct result after the analyzing process in the backend has completed. For our backend, the input text was received and analyzed...

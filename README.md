# CS410 Project-- Sentiment Analysis web application

## 1. Requirements
Before opening your browser to try our web application, please clone our code and install the necessary dependencies in your terminal by running: 

`pip install nltk` `pip install textblob` `pip install flask`

## 2. Host a local server
After installing the necessary packages, in your terminal, go to the sourcecode folder `cd sourcecode` and type in the following `npm install`. Wait until `npm` install all dependencies for you and a new folder `node_module` will generated. Then you need to open two command line, one for start server and one for bring our backend online. change directory to our project and `cd sourcecode` run `npm start` in the first commond line. For the second command line you will also need to change directory to project folder and `cd sourcecode` and then run `flask run` to host a local server in your computer. After that, you will be able to open the webpage http://localhost:3000 in your browser.

## 3. How to use our web application
The webpage is very straight forward. A text field is shown on the left where you can enter any sentences, words, or phrases in english. The sentiment analysis result will be shown on the right text field, indicating whether the input text is positive, neutral, or negative. 

## 4. How the web application is implemented
We divided our tasks into frontend and backend implementation. For our frontend, the main task was to create an input text field, ensure that the backend can receive the input text, and display the correct result after the analyzing process in the backend has completed. For our backend, the input text was received from the text field and analyzed using two sentiment analysis packages: nltk and textblob. We are looking at the "compound" field returned by the sentiment analyzer in nltk and we are also looking at the polarity field returned by the text blob instance. If both of them show that the sentence have positive or negative sentiment, we will consider it as positive/negative sentiment. Else if the two models doesn't agree with each other, we consider it as neutral sentiment.

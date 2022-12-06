from flask import Flask, render_template, request
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from textblob import TextBlob
import nltk


nltk.download('vader_lexicon')
app = Flask(__name__)


@app.route('/sentiment_score', methods=["GET", "POST"])
def sentiment_score():
    if request == "POST":
        inp = request.form.get("input")

        s = SentimentIntensityAnalyzer()
        score1 = s.polarity_scores(inp)

        blob = TextBlob(inp)
        score2 = blob.sentiment.polarity

        if score1['compound'] < 0 and score2 < 0:
            return -1
        elif score1['neg'] + score1['pos'] > 0 and score2 > 0:
            return 1
        else:
            return 0
    return 0

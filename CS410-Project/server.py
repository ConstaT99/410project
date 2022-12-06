from flask import Flask, render_template, request, jsonify
from flask_cors import CORS, cross_origin
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from textblob import TextBlob
import nltk


nltk.download('vader_lexicon')
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/sentiment_score', methods=["POST"])
@cross_origin()
def sentiment_score():
    inp = request.data.decode()

    s = SentimentIntensityAnalyzer()
    score1 = s.polarity_scores(inp)

    blob = TextBlob(inp)
    score2 = blob.sentiment.polarity

    if score1['compound'] < 0 and score2 < 0:
        return jsonify(-1)
    elif score1['neg'] + score1['pos'] > 0 and score2 > 0:
        return jsonify(1)
    else:
        return jsonify(0)

if __name__ == '__main__':
    app.run(port=8080)

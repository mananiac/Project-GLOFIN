from flask import Flask,render_template
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')
    # return render_template('anmol ka main page')

@app.route('/newsletter')
def newsletter():
    return render_template('newsletter.html')

@app.route('/finshots')
def finshots():
    return render_template('finshots.html')

@app.route('/blog')
def blog():
    return render_template('blog.html')

@app.route('/UBS')
def UBS():
    return render_template('Companies/UBS.html')    

@app.route('/news')
def news():
    return render_template('news.html')  

@app.route('/stockPrice')
def stockPrice():
    return render_template('stockPrice.html')  

@app.route('/stocks')
def stocks():
    return render_template('stocks.html')    
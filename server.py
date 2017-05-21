from flask import *

app = Flask(__name__)


CHAT = []


@app.route('/')
def return_home():
    return send_file('guest-chat.html')


@app.route('/chat.json')
def chat():
    return jsonify(CHAT)


@app.route('/post')
def post_comment():
    name = request.args.get('name')
    body = request.args.get('body')
    CHAT.append({'name': name,
                 'body': body})
    return 'success'


if __name__ == '__main__':
    app.run(host='0.0.0.0', threaded=True)

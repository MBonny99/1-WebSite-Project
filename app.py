from flask import Flask, render_template, request, redirect, url_for, flash, jsonify
import json
app = Flask(__name__)
app.secret_key = 'supersecretkey'

# Static login credentials
USERNAME = 'admin'
PASSWORD = 'supervisor'

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')

@app.route('/progetti')
def progetti():
    return render_template('progetti_in_corso.html')

@app.route('/finanze')
def finanza():
    return render_template('finanza.html')

@app.route('/carriera')
def carriera():
    return render_template('carriera.html')

@app.route('/contatti')
def contatti():
    return render_template('contatti.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        if username == USERNAME and password == PASSWORD:
            flash('Login successful!', 'success')
            return redirect(url_for('home'))
        else:
            flash('Invalid credentials, please try again.', 'danger')
    return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        user_data = request.get_json()
        with open('users.json', 'r+') as file:
            users = json.load(file)
            users.append(user_data)
            file.seek(0)
            json.dump(users, file, indent=4)
        return jsonify({'success': True})
    return render_template('register.html')

@app.route('/user-data', methods=['GET'])
def user_data():
    with open('users.json', 'r') as file:
        users = json.load(file)
        if users:
            return jsonify(users[0])
        else:
            return jsonify({})

if __name__ == '__main__':
    try:
        with open('users.json', 'x') as file:
            json.dump([], file)
    except FileExistsError:
        pass
    app.run(debug=True)

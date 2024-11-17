from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return '<h1>Home page</h1>'
    
# Task 2
@app.route('/welcome')
def welcome():
    return '''<h1>Welcome to Flask Development!</h1>
              <h2>This is Labwork 3: Flask/MySQL/API</h2>'''

# Task 3
@app.route('/table')
def table():
        people = [
        {'name': 'Alice', 'age': 22},
        {'name': 'Bob', 'age': 19},
        {'name': 'Charlie', 'age': 25},
        {'name': 'David', 'age': 24},
        {'name': 'Eve', 'age': 21}
    ]
        return render_template('table.html', people=people)

# task 4
import math
@app.route('/factorial/<int:number>')
def factorial(number):
    result = math.factorial(number)

    return f'The factorial if {number} is {result   }'

# Task 5
def is_prime(number):
    if number < 2:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        
        if number % i == 0:
            return False
    return True

@app.route('/is_prime/<int:number>')
def check_prime(number):
    if is_prime(number):
        return f'{number} is prime'
    else: return f'{number} is not prime'
    

# Task 6
from flask import Flask, request, jsonify

@app.route('/sort', methods=['GET'])
def sort_numbers():
    # Get the 'numbers' parameter from the URL
    numbers = request.args.get('numbers')
    
    if not numbers:
        return jsonify({"error": "No numbers provided"}), 400
    
    try:
        # Convert the comma-separated string into a list of integers
        number_list = list(map(int, numbers.split(',')))
        
        # Sort the list in ascending order
        sorted_numbers = sorted(number_list)
        
        # Return the sorted array as JSON
        return jsonify({"sorted_numbers": sorted_numbers})
    except ValueError:
        return jsonify({"error": "Invalid input. Please provide a list of numbers separated by commas."}), 400

@app.route('/reverse_string/<string:text>', methods=['GET'])
def reverse_string(text):
    # Reverse the string using slicing
    reversed_text = text[::-1]
    
    # Return the reversed string
    return {"original": text, "reversed": reversed_text}

# run app
if __name__ == '__main__':
    app.run(debug=True)

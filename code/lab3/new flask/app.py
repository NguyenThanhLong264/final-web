from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# Configure MySQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/student_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define the Students table
class Student(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    student_class = db.Column(db.String(50), nullable=False)
    mark = db.Column(db.Integer, nullable=False)

@app.route('/create_table')
def create_table():
    db.create_all()
    return "Students table created successfully!"

@app.route('/add_student')
def add_student():
    student = Student(name="John", student_class="One", mark=80)
    db.session.add(student)
    db.session.commit()
    return "Student added successfully!"
@app.route('/update_students')
def update_students():
    students = Student.query.filter(Student.mark < 60).all()
    for student in students:
        student.student_class = "Two"
    db.session.commit()
    return "Students with marks less than 60 have been updated!"

@app.route('/excellent_students')
def excellent_students():
    students = Student.query.filter(Student.mark > 75).all()
    return render_template('excellent.html', students=students)

@app.route('/good_students')
def good_students():
    students = Student.query.filter(Student.mark.between(60, 75)).all()
    return render_template('good.html', students=students)

@app.route('/average_students')
def average_students():
    students = Student.query.filter(Student.mark < 60).all()
    return render_template('average.html', students=students)


if __name__ == '__main__':
    app.run(debug=True)

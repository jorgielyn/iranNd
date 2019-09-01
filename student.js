class Student {
    constructor(name) {
        this.name = name;
        this.schedule = {};
        this.course = {};
    }

    setName(name) {
        this.name = name;
    }

    addSchedule(day, time) {
        this.schedule[day] = time;
    }

    addCourse(course,year){
        this.course[this.course] = year;
    }
}

module.exports = Student;
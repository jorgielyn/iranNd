var student = require("./student")
var input = require("readline-sync")
var http = require("http")

var jorge = new student();
do {
    console.log("Add Student : ")
    jorge.setName(input.question("\tName : "))
    console.log("Add Course : ")
    jorge.addCourse(input.question("\tCourse : "),input.question("\tYear : "))
    console.log("Add Schedule :")
    jorge.addSchedule(input.question("\tDay : "),input.question("\tTime : "))
} while (input.question("exit? : ")!= "yes");
    console.log("Successfully Added data!")
http.createServer(function(request , response){
    console.log("server started!")
    response.write()
    response.end()
}).listen(8888)


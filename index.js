var student = require("./student")
var input = require("readline-sync")
var http = require("http")

var jorge = new student();
//the program runs until "YES" is inputed!
do {
    console.log("Add Student : ")
    jorge.setName(input.question("\tName : "))
    console.log("Add Course : ")
    jorge.addCourse(input.question("\tCourse : "),input.question("\tYear : "))
    console.log("Add Schedule :")
    jorge.addSchedule(input.question("\tDay : "),input.question("\tTime : "))
} while (input.question("exit? : ")!= "yes");
    console.log("Successfully Added data!")
    //creating a server
http.createServer(function(request , response){
    console.log("server started!")
    response.write()//start the response
    response.end()//end the sever response
}).listen(8080)

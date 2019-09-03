var student = require("./student")
var input = require("readline-sync")
//var toArray=  require("to-array")
const deepcopy = require('deepcopy')
var http = require("http")
var list = []
var jorge = new student();
//the program runs until "YES" is inputed!
do{
do {
    console.log("Add Student : ")
    jorge.setName(input.question("\tName : "))
    console.log("Add Course : ")
    jorge.addCourse(input.question("\tCourse : "),input.question("\tYear : "))
    console.log("Add Schedule :")
    jorge.addSchedule(input.question("\tDay : "),input.question("\tTime : "))
    list.push(jorge)
} while (input.question("exit? : ")!= "yes");
    console.log("Successfully Added data!\n")
    //to view the data
    if(input.question("Wanna view the Data Added? ")!="no\n"){
    //arrays
    // list.push(jorge)
    console.log(list)
    // list.push(jorge);
    // list.toArray();
    }else("Thank You! \t Come again!")
} while(input.question("exit? : ")!="yes");
    console.log("Thank You!")
    //creating a server
http.createServer(function(request , response){
    console.log("server started!")
    response.write()//start the response
    response.end()//end the sever response
}).listen(8000)



const express = require("express");
const cors = require("cors");
require("./db/config");

const User = require("./db/User");
const Courses = require("./db/Courses");
const Student = require("./db/Student");
const app = express();


// university post data
app.use(express.json());
app.use(cors());
app.post("/register",async (req,resp)=>{
let user = new User(req.body);
let result = await user.save()
    resp.send(result);
});

// courses post data
app.post("/courses",async(req,resp)=>{
    let courses = new Courses(req.body);
    let resultCourses =await courses.save()
    resp.send(resultCourses);
});
app.post("/student",async(req,resp)=>{
    let student = new Student(req.body);
    let resultStudent = await student.save()
    resp.send(resultStudent); 
})
// student post data

// university get gata
app.get("/university",async(req,resp)=>{
let university = await User.find();
if(university.length>0){
    resp.send(university)
}
else{
    resp.send({result:"No data found"})
}
});
// courses get gata
app.get("/courses",async(req,resp)=>{
    let courses = await Courses.find().populate("us");
    console.log(courses);
    if(courses.length>0){
        resp.send(courses)
    }
    else{
        resp.send({result:"No data found"})
    }
    });

    // student get gata
app.get("/student",async(req,resp)=>{
    let student = await Student.find().populate("courses").populate("us");
    if(student.length>0){
        resp.send(student)
    }
    else{
        resp.send({result:"No data found"})
    }
    });


//     const createComment = function(tutorialId, comment) {
//   return db.Comment.create(comment).then(docComment => {
//     console.log("\n>> Created Comment:\n", docComment);

//     return db.Tutorial.findByIdAndUpdate(
//       tutorialId,
//       { $push: { comments: docComment._id } },
//       { new: true, useFindAndModify: false }
//     );
//   });
// };
// var data;
// const connectDb = async ()=>{
//     mongoose.connect('mongodb://localhost:27017/mediciation-web');
//     const productSchema = new mongoose.Schema({});
//     const product = mongoose.model("products",productSchema);
//      data = await product.find();
//     console.log("data",data);
// }


// app.get("/",(req,resp)=>{
//     resp.send("Api Working");
// })
// connectDb();

app.listen(5000);

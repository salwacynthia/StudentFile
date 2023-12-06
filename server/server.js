const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001


mongoose.connect('mongodb://localhost:3000/studentDB', {
    useNewUrlParser:true,
    useUnifiedTopology:true, 
});


const studentSchema = new mongoose.Schema({
    id : Number,
    first_name : String,
    last_name : String,
    check_in_time : Date
});

const Student = mongoose.model('Student', studentSchema);

app.get('/index', async(req, res) => {
    try{
        const students = await Student.find();
        res.json(students);
    } catch(error){
        res.status(500).send(error.message);
    }
});


app.listen(PORT, ()=>{
    console.log('Server is running on port ${PORT}')
});

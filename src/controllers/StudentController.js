
import * as fs from 'fs';
const students = JSON.parse(fs.readFileSync("./src/database/students.json"));


export const index = (req, res) => {
    res.send(students);
};


export const show = (req, res) => {
    const id = req.params.id;
    res.send(students.find(student => student.id == id));
};



export const store = (req, res) => {
    res.send('her you can add students');
};

export const update = (req, res) => {
    const id = req.params.id;
    res.send("her you can update student with id " + id);
}

export const destroy = (req, res) => {
    const id = req.params.id;
    res.send(`her you can delete student with id ${id}`);
}






import * as fs from 'fs';
const teachers = JSON.parse(fs.readFileSync("./src/database/teachers.json"));


export const index = (req, res) => {
    res.send(teachers);
};


export const show = (req, res) => {
    const id = req.params.id;
    res.send(teachers.find(student => student.id == id));
};



export const store = (req, res) => {
    res.send('her you can add teachers');
};

export const update = (req, res) => {
    const id = req.params.id;
    res.send("her you can update teacher with id " + id);
}

export const destroy = (req, res) => {
    const id = req.params.id;
    res.send(`her you can delete teacher with id ${id}`);
}





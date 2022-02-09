import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/firebase.js";
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

let users = [];
const collectionRef = collection(db, "users")

export const getUsers = async (req, res) => {
    const Users = await getDocs(collection(db, "users"));
    users.length=0;
    Users.docs.map((doc) => (users.push({ ...doc.data() })))
    res.send(users);
}

export const createUser = async (req, res) => {
    try {
        const data = req.body;
        await addDoc(collectionRef, { ...data, id: uuidv4() })
        res.send("record added");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;
    const Users = await getDocs(collection(db, "users"));
    users.length=0;
    Users.docs.map((doc) => (users.push({ ...doc.data()})))
    res.send(users.find((user) => user.id === id));
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const Users = await getDocs(collection(db, "users"));
        Users.docs.map((doc) => (users.push({ ...doc.data(), Id: doc.id })))
        const FoundUser = users.find((user) => user.id === id);
        users.length=0;
        const userDoc = doc(collectionRef, FoundUser.Id);
        deleteDoc(userDoc);
        res.send(`User deleted from the database!`);
    } catch (error) {
        res.status(400).send(error.message);
    }

}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const newStatus = { firstName: firstName, lastName: lastName, age: age };
    const Users = await getDocs(collection(db, "users"));
    Users.docs.map((doc) => (users.push({ ...doc.data(), Id: doc.id })))
    const FoundUser = users.find((user) => user.id === id);
    users.length=0;
    const newUser = doc(collectionRef, FoundUser.Id)
    updateDoc(newUser, newStatus);
    res.send(`user has been updated`)

}

import express from 'express';
// import cors from 'cors';

const app = express();

// app.use(cors());
app.use(express.json());

// User data
const userData = [
    {
        id: 101,
        name: "CM",
        email: "abc@gmail.com"
    },
    {
        id: 102,
        name: "Anshika",
        email: "anshika@gmail.com"
    }
];

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome user"
    });
});


app.get('/users', (req, res) => {
    res.status(200).json(userData);
});

app.get('/search', (req, res) => {
    const name = req.query.name;

    res.status(200).json({
        message: "welcome",
        name: name
    });
});
app.get("/users/:id",(req,res)=>{
    try{
        const id=req.params.id;
        const users=userData.find((u)=>u.id==id);
        if(!users){
            return res.status(400).json({message:"user not found"})
        }res.status(200).json({message:"data received",users});
    }catch(err){
        console.log("Error",err.message);
    }
})

app.post('/register', (req, res) => {
    const newUser = req.body;

    userData.push(newUser);

    res.status(201).json({
        message: "User registered successfully",
        user: newUser
    });
});
app.post("/create",(req,res)=>{
    try{
    const{name,email}=req.body;
    const newUser={
        id:userData.length+1,
        name,
        email,
    };
    userData.push(newUser);
    res.status(201).json({message:"user created",newUser});
    } catch(err){
        console.error("error",err.message);
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
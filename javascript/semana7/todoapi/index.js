import express from "express";

const app = express();
app.use(express.json());


const tasks =[];

const t1 = {
    id: 1,
    text: "Banarme",
    created_at: new Date(),
};

const t2 = {
    id: 2,
    text: "Acostarme",
    created_at: new Date(),
};

tasks.push(t1);
tasks.push(t2);

app.get("/", (req, res) => {
    res.json({
        message: "Hola",
        
    });
});

//GET: generalmente se usa para pedirle datos al servidor
app.get("/tasks", (req, res => {
    res.json({
        tasks: tasks,
    });
}));

//POST: generalmente se usa para enviarle datos al servidor
app.post("/task", (req, res) =>{
    const task = req.body;
    tasks.push(task);
    //Le voy a responder al cliente
    res.json({
        message: "ok",
    })
});

app.get('/jugadores-balon-oro', (req,res)=>{
    const players = [
        {
            name: "Karim Benzema",
            year: 2022,
            img: "https://img.a.transfermarkt.technology/portrait/big/18922-1653042225.jpg?lm=1"
        },
        {
            name: "Lionel Messi",
            year: 2021,
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
        },
        {
            name: "Lionel Messi",
            year: 2019,
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg"
        },
        {
            name: "Luka Modric",
            year: 2018,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/ISL-HRV_%287%29.jpg/245px-ISL-HRV_%287%29.jpg"
        },
    ];
    res.json(players);
})

app.listen(4000);
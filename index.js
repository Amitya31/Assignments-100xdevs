const express = require('express');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

function promisifiedreadfile(filename){
    return new Promise((resolve,reject)=>{
        fs.readFile(filename,'utf-8',(err,data)=>{
            if(!err){
                resolve(JSON.parse(data));
            }else{
                reject(err);
            }
        })
    })
}

function promisifiedwritefile(filename,data){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filename,JSON.stringify(data),(err)=>{
            if(!err){
                resolve();
            }else{
                reject(err);
            }
        })
    })
}

let usersData = [{
    user: 1,
    todos:[]
}]

promisifiedwritefile('todos.json',usersData)

app.get('/todo',(req,res)=>{
    promisifiedreadfile('todos.json').then((data)=>{
        usersData = data;
        todoItems = usersData[0].todos;
        res.status(200).send(todoItems);
    })
})

app.get('/todo/:id',(req,res)=>{
    let requestedId = req.params.id
    promisifiedreadfile('todos.json').then((data)=>{
        usersData = data;
        let todoItems = usersData[0].todos.find(todo=>todo.id===requestedId);
        if(todoItems){
            res.status(200).send(todoItems)
        }else{
            res.status(404).send('todo items not find')
        };
    });
});

app.post('/todo',async (req,res)=>{
    let todoData = req.body;
    todoData.id = uuidv4()
    await promisifiedreadfile('todos.json').then((data)=>{
        usersData = data;
        usersData[0].todos.push(todoData)
        res.status(200).json({
            id: todoData.id,
        })
    })
    promisifiedwritefile('todos.json',usersData).then(()=>console.log('updated file'))
})

app.put("/todo/:id",(req,res)=>{
    let requestedId=req.params.id;
    let reqData=req.body;
    promisifiedreadfile('todos.json').then((data)=>{
      usersData=data;
      let existingDataObj=usersData[0].todos.find((todo)=>todo.id==requestedId);//used == to compare string
      changingId=reqData.id||null;
      if((existingDataObj)&&!((usersData[0].todos.filter((todo)=>todo.id==changingId))&&changingId)){
        // let updatedData={...existingData,...reqData};//the seperator operator(...) joins two objects, if req and existing data contains same key the value of reqData will be overwrite the value of existing data: googled it
        let updatedData=Object.assign({},existingDataObj,reqData);//better way to do the same as above in case of same keys the value of reqData will overwrite the value of existingData
        usersData[0].todos=usersData[0].todos.filter(todo=>todo.id!=requestedId);
        usersData[0].todos.push(updatedData);
        res.status(200).json({
          message:"Updated todo",
          id: existingDataObj.id
        })
        promisifiedwritefile('todos.json',usersData).then(()=>console.log("Updated data of todo and added it to file"));
      }
      else{
        res.status(404).send("404 Not Found");
      }
    })
    })


app.delete('/todo/:id', (req,res)=>{
    let requestedId = req.params.id;
    promisifiedreadfile('todos.json').then((data)=>{
        usersData = data;
        idFound = usersData[0].todos.filter((todo)=>todo.id===requestedId)
        if(idFound&&requestedId){
            usersData[0].todos.filter((todo)=>todo.id!=requestedId)
            res.status(200).send()
            promisifiedwritefile('todos.json',usersData).then(()=>console.log("Todo deleted and added to file succesfully!!"))
        }else{
            res.status(404).send({
                message:"404 not found"
            })
        }
    }) 
})
app.listen(3001)
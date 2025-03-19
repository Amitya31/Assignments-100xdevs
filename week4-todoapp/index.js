const fs = require('fs');
const { Command } = require('commander');



const filepath = './todo.json'
const program = new Command()

// helper functions

function readTodos(){
    try{
        const data = fs.readFileSync('./todo.json',('utf-8'));
        return JSON.parse(data);
    }catch(err){
        console.log("unable to read file")
        return {};
    }
}

function writeTodos(todos){
    try{
        const data = fs.writeFileSync('./todo.json',JSON.stringify(todos, null,2))
    }catch(err){
        console.log("Error writing todos: ", err)
    }
}

function ensureUser(todos,username ){
    if(!todos[username]){
        todos[username] = []
    }
}

function newTodo(username, task){
    const todos = readTodos()
    ensureUser(todos, username)
    newTodo  = {
        id : todos[username].length + 1,
        task: task,
        done: false
    }
    todos[username].push(newTodo)
    writeTodos(todos);
    console.log(`new todo is added for ${username} : ${task}`)
}

function updateTodo(username,id,newTask){
    const todos = readTodos()
    ensureUser(todos,username)
    const todo = todos[username].find(t => t.id === id) 
    if(todo){
        todo.task = newTask
        writeTodos(todos);
        console.log(`Updated todo ${id} for ${username}. New task: "${newTask}"`);
    } else {
        console.log(`Todo with id ${id} not found for ${username}.`);
    }
}

function deleteTodo(username, id){
    const todos = readTodos();
    ensureUser(todos, username);
    
    const originalLength = todos[username].length;
    // Filter out the todo with the given id
    const newTodo = todos[username].filter(t => t.id !== id);

    if(newTodo.length !== originalLength){
        todos[username] = newTodo; // Assign updated todo list
        writeTodos(todos);
        console.log(`Deleted todo ${id} for ${username}.`);
    } else {
        console.log(`Todo not found for ${username} with id = ${id}`);
    }
}

function listTodos(username) {
    const todos = readTodos();
    ensureUser(todos, username);
    const userTodos = todos[username];
    if (userTodos.length === 0) {
        console.log(`No todos found for ${username}.`);
        return;
    }
    console.log(`${username}'s Todos:`);
    userTodos.forEach(todo => {
        console.log(`[${todo.done ? 'x' : ' '}] ${todo.id}. ${todo.task}`);
    });
}

function markdone(username,id){
    const todos = readTodos()
    ensureUser(todos,username);
    const todo = todos[username].find(t => t.id === id)
    if(todo){
        todo.done  = true
        writeTodos(todos);
        console.log(`Marked todo ${id} as done for ${username}.`);
    } else {
        console.log(`Todo with id ${id} not found for ${username}.`);
    }
}

program
    .name('todo')
    .description('CLI todo with multiuser support')
    .version('1.0.0')

program
    .command('add <username> <task>')
    .description('add a new todo for user')
    .action((username,task)=>newTodo(username,task));

program
    .command('list <username>')
    .description('list all the todos of the user')
    .action((username)=>listTodos(username))
program
    .command('update <username> <id> <task>')
    .description('update a todo of a user')
    .action((username,id,task)=>updateTodo(username,parseInt(id),task))

program
    .command('markdone <username> <id>')
    .description('markdone the user todo')
    .action((username,id)=>markdone(username,parseInt(id)))
program
    .command('delete <username> <id>')
    .description('delete the user todo')
    .action((username,id)=>deleteTodo(username,parseInt(id)))

program.parse(process.argv);
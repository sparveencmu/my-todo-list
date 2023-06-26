# Overview
My ToDo List is a productivity app that lets us add our daily tasks to the task list and, optionally, delete the task once it’s finished.
It has three function based compenent:  
  1. The Header component displays the application’s name, say, My ToDo List. However, feel free to give it any name.  
  2. The Input component provides us with an input element where we can type the name of our task and add it to the list of tasks.   
  3. The ToDoList component displays a list of tasks that users have entered, as well as a “delete” button that deletes tasks once they’re  
   finished.

It uses hooks like useState and useEffect for state manegement


# Create my-todo-list
  Step 1: Install Node.js and npm  
  Step 2: Create a new React app  
          npx create-react-app my-todo-app  
          cd my-todo-app  
  Step 3: Start the development server  
          npm start  
  Step 4: Build and deploy your app  
          npm run build

# Why we need nanoid
Each time we pass the props item in a component, it generates a child element. 
React needs a unique key to uniquely distinguish these child elements.
npm install nanoid

# To build and run a React application, follow these steps:
Step 1: Install dependencies  
npm install  
Step 2: Build the application:  
npm run build
Step 3: Serve the built application locally
npm start
This command will start a development server, and your React application will be accessible at http://localhost:3000 in your web browser. 















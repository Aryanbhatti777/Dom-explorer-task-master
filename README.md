# Task Master

Task Master is a simple and clean task management web application that runs entirely in your browser. It lets you add, edit, complete, search, and delete tasks without needing any server or database. All your tasks are saved locally using your browser's local storage, so they stay even after you close or refresh the page.

## Features

Add tasks with a title, description, and category. You can choose from five categories: Work, Study, Health, Personal, and Chill. Once a task is added, it shows up in the main area where you can manage it.

You can mark a task as complete, edit it, or delete it. Tasks that are marked complete show a "Completed" label and the edit button is hidden to prevent changes. You can also clear all tasks at once using the Clear All button in the navigation bar.

There is a search box that lets you filter your tasks by typing in a keyword. It searches through the task title, description, and category. You can also press Enter to search or click the Search button. The All button resets the search and shows all tasks again.

The app supports a light and dark theme. Click the Theme button in the navigation bar to switch between a black background with white text and a white background with black text.

## How to Use

Open the index.html file in any modern web browser. The app loads with no tasks and shows a message saying "No Tasks Added Yet."

To add a new task, click the Add Task button in the navigation bar. A form appears in the center of the screen where you can type the task name, add a description, and pick a category from the dropdown menu. Click Add Task to save it or Cancel to close the form.

Each task card displays the task name, category badge, description, and action buttons. Click Complete to mark it as done, Edit to modify the task details, or Delete to remove it from the list.

When you edit a task, the same form appears but the submit button changes to say "Update Task." Make your changes and click Update Task to save them.

## Project Structure

The project has three files. index.html contains the HTML structure of the page. style.css contains all the styling including the dark and light themes and responsive layout. script.js contains the JavaScript logic for adding, editing, completing, deleting, searching tasks, and managing the local storage.

## How It Works

The app uses the browsers local storage to store tasks as a JSON array. Each task has a unique ID based on the timestamp when it was created, along with the task name, description, category, and a completion status.

When the page loads, it reads the tasks from local storage and displays them. Any change you make is immediately saved back to local storage and the display updates automatically.

## Responsive Design

The app works on different screen sizes. On smaller screens like mobile phones, the navigation bar stacks vertically and the search box and form inputs adjust their width to fit the screen better.

## Technologies Used

This project uses HTML for the structure, CSS for styling and layout, and JavaScript for all the interactive functionality. No external libraries or frameworks are used. The only external resource is the Remixicon icon set for the search icon.


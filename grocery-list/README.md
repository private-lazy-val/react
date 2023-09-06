## Description

This project is a React-based application that serves as a grocery list manager. The application helps users to manage their grocery list by adding, deleting, and searching for grocery items.

## Features

- **Add Grocery Item**: Easily add new grocery items.
- **Delete Grocery Item**: Each listed item can be deleted with a single click on a trash can.
- **Search Functionality**:  Quick search to find items in your grocery list.
- **Strike-Through Products**: You can strike-through items that have been purchased or are no longer needed.
- **JSON Server**: The application uses json-server for a full fake REST API.

### Running the JSON Server

To simulate a back-end server, I am using `json-server`. To run it, execute the following command:

```bash
npx json-server -p 3500 -w data/db.json

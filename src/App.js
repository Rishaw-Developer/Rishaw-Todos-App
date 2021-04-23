import React, { useState } from "react";
import "./App.css";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

function App() {
  const [todos, setTodos] = useState([]);
  const [texts, setTexts] = useState("");

  const DeleteOn = (id) => {
    let data = todos.filter((a, i) => {
      return i !== id;
    });

    setTodos(data);
  };
  return (
    <div className="App">
      <h1>Todo App of Rishaw <span>🚀</span> </h1>
      <Card
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          background: "white" /**/,
          boxShadow: "0px 2px 10px black",
          marginTop: "10px",
        }}
      >
        <CardContent>
          <TextField
            style={{
              background: "rgb(204, 204, 204)",
              border: "none",
              borderRadius: "2px",
            }}
            id="outlined-basic"
            label="Todo Title"
            variant="outlined"
            value={texts}
            onChange={(e) => {
              setTexts(e.target.value);
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            onClick={(e) => {
              setTodos([...todos, texts]);
            }}
            variant="contained"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </CardActions>

        <CardActions>
          <Button
            onClick={(e) => {
              setTodos([]);
            }}
            variant="contained"
            startIcon={<DeleteIcon />}
          >
            ClearAll
          </Button>
        </CardActions>
      </Card>
      {todos.length === 0 ? (
        <Card style={{ marginTop: "10px" }}>
          <CardContent>
            <h3>No Todos Found</h3>
          </CardContent>
        </Card>
      ) : (
        <List style={{ background: "gray", marginTop: "30px", width: "500px" }}>
          {todos.map((a, i) => {
            console.log();
            return (
              <ListItem
                style={{
                  background: "white",
                  margin: "10px 20px",
                  width: "450px",
                  borderRadius: "10px",
                  color: 'black',
                }}
                key={i}
              >
                <ListItemText primary={a} />
                <Button startIcon={<DeleteIcon />} onClick={() => DeleteOn(i)}>
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </List>
      )}
    </div>
  );
}

export default App;

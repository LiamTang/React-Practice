import React, { useState } from 'react';
import styles from './todo.css';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Modal,
  makeStyles,
  Input,
} from '@material-ui/core';
import db from './firebase';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const classes = useStyles();

  const handleUpdate = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true } //prevent overwriting, not removing the key, just update the content
    );
    setOpen(false);
  };

  return (
    <div className="list">
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        style={{ display: 'grid', placeItems: 'center' }}
      >
        <div className={classes.paper}>
          <h3>Just update your todo list</h3>
          <Input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </Modal>
      <List>
        <ListItem>
          <ListItemText primary={props.todo.todo} />
        </ListItem>
      </List>
      <div>
        <Button
          variant="contained"
          style={{ margin: '10px' }}
          onClick={(e) => setOpen(true)}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={(event) =>
            db.collection('todos').doc(props.todo.id).delete()
          }
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

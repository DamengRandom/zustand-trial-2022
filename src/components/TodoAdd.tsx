import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import useStore from "../store";

function TodoAdd() {
  const store = useStore();
  const handleNewTodo = (e: { target: { value: string } }) =>
    store.setNewTodo(e.target.value);
  const addNewTodo = () => store.addTodo();

  console.log("also re-rendered???");

  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={store.newTodo}
        onChange={handleNewTodo}
      />
      <Button onClick={addNewTodo}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;

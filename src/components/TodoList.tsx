import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import useStore, { Todo } from "../store";

function TodoListItems() {
  const store = useStore();
  const updateTodo = (id: number, text: string) => store.update(id, text);
  const toggleTodo = (id: number) => store.toggle(id);
  const deleteTodo = (id: number) => store.remove(id);

  console.log("re-rendered?? ", store.todos);

  return (
    <>
      {store.todos.map((todo: Todo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox checked={todo.done} onClick={() => toggleTodo(todo.id)} />
          <Input
            mx={2}
            value={todo.text}
            onChange={(e: { target: { value: string } }) =>
              updateTodo(todo.id, e.target.value)
            }
          />
          <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;

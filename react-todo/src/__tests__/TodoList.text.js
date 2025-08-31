import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    userEvent.type(input, "New Todo");
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo completion", () => {
    render(<TodoList />);

    const todo = screen.getByText("Learn React");
    expect(todo).not.toHaveClass("line-through");

    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");

    fireEvent.click(todo);
    expect(todo).not.toHaveClass("line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const todo = screen.getByText("Build a Todo App");
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});

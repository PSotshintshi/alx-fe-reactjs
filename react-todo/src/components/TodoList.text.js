import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  beforeEach(() => {
    render(<TodoList />);
  });

  test("renders initial todos correctly", () => {
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByRole("button", { name: /add/i });

    // Add a valid todo
    await userEvent.type(input, "New Todo");
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("does not add an empty todo", async () => {
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByRole("button", { name: /add/i });

    // Attempt to add empty todo
    fireEvent.click(addButton);

    // Should not add a new empty item
    const todos = screen.getAllByRole("listitem");
    expect(todos).toHaveLength(3); // initial demo todos only
  });

  test("toggles a todo completion", () => {
    const todo = screen.getByText("Learn React");

    // Initially not completed
    expect(todo).not.toHaveClass("line-through");

    // Toggle complete
    fireEvent.click(todo);
    expect(todo).toHaveClass("line-through");

    // Toggle back
    fireEvent.click(todo);
    expect(todo).not.toHaveClass("line-through");
  });

  test("deletes a todo", () => {
    const todo = screen.getByText("Build a Todo App");
    const deleteButton = todo.nextSibling; // assumes Delete button is next

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();

    // Remaining todos
    const remainingTodos = screen.getAllByRole("listitem");
    expect(remainingTodos).toHaveLength(2);
  });
});

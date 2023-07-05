import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList, updateTodo } from "../../store/actions/userAction";

export default function TodoList() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const todoList = useSelector((state) => {
    return state.user.todoList;
  });

  const handleCheck = async (event) => {
    event.preventDefault();
    if (event.target.checked) {
      console.log("AAA", event.target.value);
      await dispatch(updateTodo(event.target.value, { status: true }));
    } else {
      console.log("BBB", event.target.value);
      await dispatch(updateTodo(event.target.value, { status: false }));
    }
    dispatch(fetchTodoList(id));
  };

  useEffect(() => {
    dispatch(fetchTodoList(id));
  }, []);

  return (
    <>
      <h3 className="page-title">My Todo List</h3>
      <div className="todolist-container">
        {todoList?.map((todo, index) => {
          return (
            <div className="todolist" key={index}>
              <input
                value={todo.id}
                checked={todo.status ? true : false}
                type="checkbox"
                onChange={handleCheck}
              />
              <span className={todo.status ? "todo-done" : "todocontent"}>
                {todo.TodoList.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

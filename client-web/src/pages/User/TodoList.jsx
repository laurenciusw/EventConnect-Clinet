import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from '../../store/actions/userAction';

export default function TodoList() {
  let { id } = useParams();

  const dispatch = useDispatch();
  const todoList = useSelector((state) => {
    return state.user.todoList;
  });

  useEffect(() => {
    dispatch(fetchTodoList(id));
    console.log(todoList)
  }, []);
  

  return (
    <>
     <h3 className="page-title">My Todo List</h3>
    <div className="todolist-container">
        {todoList?.map((todo, index) => {
            return <div className="todolist" key={index}>
            <input value={todo.TodoList.name} type="checkbox" />
            <span className="todocontent">{todo.TodoList.name}</span>
            </div>;
          })}
    </div>
    </>
  );
}
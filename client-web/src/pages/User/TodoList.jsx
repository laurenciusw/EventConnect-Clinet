import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

export default function TodoList() {
  

  return (
    <>
     <h3 className="page-title">Enchanted Rhythm Music Festival Checklist</h3>
    <div className="todolist-container">
        <div className="todolist">
        <input value='tugas yang harus dilakukan' type="checkbox" />
        <span className="todocontent">tugas yang harus dilakukan</span>
        </div>
        <div className="todolist">
        <input value='tugas yang harus dilakukan' type="checkbox" />
        <span className="todocontent">tugas yang harus dilakukan</span>
        </div>
        <div className="todolist">
        <input value='tugas yang harus dilakukan' type="checkbox" />
        <span className="todocontent">tugas yang harus dilakukan</span>
        </div>
        <div className="todolist">
        <input value='tugas yang harus dilakukan' type="checkbox" />
        <span className="todocontent">tugas yang harus dilakukan</span>
        </div>
    </div>
    </>
  );
}
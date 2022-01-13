import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { todolistsAPI } from '../api/todolists-api';

export default {
  title: 'API',
};

const settings = {
  withCredentials: true,
  headers: {
    'API-KEY': '3e51854b-77a6-47e2-a04b-6ed88b6914b4',
  },
};

export const GetTodolists = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    // здесь мы будем делать запрос и ответ закидывать в стейт.
    // который в виде строки будем отображать в div-ке
    todolistsAPI.getTodolists().then((res) => {
      setState(res.data);
    });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    todolistsAPI.createTodolists("blabla").then((res) => {
      setState(res.data);
    });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = 'dafc78c8-23ab-4011-bf96-e6c3ebce0c15';
    todolistsAPI.deleteTodolist(todolistId)
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    const todolistId = 'b8418ba0-93da-4c8b-a98c-eb672db96417';
    todolistsAPI.updateTodolist(todolistId, "Hello")
      .then((res) => {
        setState(res.data);
      });
  }, []);

  return <div> {JSON.stringify(state)}</div>;
};

export const GetTasks = () => {
   const [state, setState] = useState<any>(null);
   useEffect(() => {
     const todolistId ='b8418ba0-93da-4c8b-a98c-eb672db96417'
     todolistsAPI.getTasks(todolistId).then((res) => {
       setState(res.data);
     });
   }, []);
 
   return <div> {JSON.stringify(state)}</div>;
 };

 export const DeleteTasks = () => {
   const [state, setState] = useState<any>(null);
   useEffect(() => {
     const todolistId =''
     const taskId =''
     todolistsAPI.deleteTask(todolistId, taskId).then((res) => {
       setState(res.data);
     });
   }, []);
 
   return <div> {JSON.stringify(state)}</div>;
 };
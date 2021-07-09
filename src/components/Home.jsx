import React from 'react';
import { Link } from 'react-router-dom';
import { useTodo } from '../hooks/TodoHooks';

const Home = () => {

  const { todoList } = useTodo();
  const users = [0]

  return <div>
      <div>
        <h3>Lista de Users</h3>
        <ul>
        {
          todoList.map((i, idx) => (
            <li key={idx}>{i}</li>
          ))
        }
        </ul>
      </div>

      <Link to="/users">Ir para user</Link>
  </div>
}

export default Home;
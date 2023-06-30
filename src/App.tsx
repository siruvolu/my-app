import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColumnView from './components/ColumnView';

const App: React.FC = () => {
  const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com', status : true },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status :false },
    { id: 3, name: 'Sai', email: '' , status: false},
  ];

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status'}
  ];

  return (
    <div>
      <h1>Column View Example</h1>
      <ColumnView data={data} columns={columns} />
    </div>
  );
};

export default App;
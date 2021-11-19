import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ListTasks from './components/ListTasks';
import Teste from './pages/Teste';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ListTasks />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  )
}
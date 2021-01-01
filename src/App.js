import React from 'react';

import { Header } from './components/layouts/header';
import { Content } from './components/layouts/content';

import { ProjectsProvider, SelectedProjectProvider } from './context/index';

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);

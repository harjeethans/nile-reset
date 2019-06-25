import React from 'react';

import Buttons from './examples/button';
import ButtonGroup from './examples/button-group';
import CheckBoxes from './examples/checkbox';
import FormControls from './examples/form-control';
import SelectControl from './examples/select';
import Uploader from './examples/file-uploader/basic';
import Menu from './examples/menu/child';
import Header from './examples/header-navigation/basic';
import Pagination from './examples/pagination/controlled';
import SideNavigation from './examples/side-navigation/basic';
import Tabs from './examples/tabs';
import Accordion from './examples/accordion/basic';
import Table from './examples/table';
import Dnd from './examples/dnd-list/basic';
import Tags from './examples/tag/clickable';
import Notification from './examples/notification/kinds';
import ProgressBar from './examples/progress-bar/basic';
import ProgressSteps from './examples/progress-steps/numbered';

import Modal from './examples/modal/basic';
import Popover from './examples/popover/stateful-click';
import Tooltip from './examples/tooltip/stateful';

import { Container } from './examples/common';

import './App.css';

function App() {
  return (
    <div className="App">
      <Buttons/>
      <ButtonGroup/>
      <CheckBoxes/>
      <FormControls/>
      <Uploader/>
      <Menu/>
      <SelectControl/>
      <Header/>
      <br/>
      <Pagination/>
      <Container>
        <SideNavigation/>
      </Container>
      <Tabs/>
      <br/>
      <Container>
        <Accordion/>
        <Dnd/>
        <Tags/>
        <Notification/>
        <ProgressBar/>
        <ProgressSteps/>
        <br/>
        <Modal/>
        <br/>
        <Popover/>
        <Tooltip/>
      </Container>
      <Table/>
    </div>
  );
}

export default App;

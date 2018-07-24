import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './pagesCSS/project.css';

const Projects = () => (
  <Tabs>
    <TabList>
      <Tab>Front End</Tab>
      <Tab>Back End</Tab>
    </TabList>

    <TabPanel>
        <div className="FEcard">
      <h2>Front End Projects</h2>
        </div>
    </TabPanel>
    <TabPanel>
        <div className="BEcard">
      <h2>Back End Projects</h2>
        </div>
    </TabPanel>
  </Tabs>
);

export default Projects;
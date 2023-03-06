/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';

function App() {
  const [activities,setActivities] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data)
      })
  }, [])
  
  return (
    <div>
        <Header as='h2' icon='users' content='Reactivities'/>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <List>
          {activities.map((activity:any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
        {/* <Button>Test</Button> */}


    </div>
  );
}

export default App;

import  React, { useState, useEffect } from 'react';
import PowerTrade from './PowerTrade';
import PowerSummary from './PowerSummary';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';
import AppConfig from './AppConfig.json';


function App() {
  const [powerTrades, setPowerTrades] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let dateparam ='2015-04-01'
    // let dateparam ='2015-11-22'

    getPowerReport(dateparam);

    const intervalId = setInterval(() => {
      getPowerReport();
    }, (AppConfig.EXTRACT_INTERVAL) * 60000);
  }, [])

  const getPowerReport = (dateparam) => {
    axios.get(`https://localhost:7270/api/Power?date=${dateparam}`)
    .then(response => {
       setPowerTrades(response.data);
    })
    .catch(err => {
       setError(err);
       console.log('ERROR IN AXIOS CALL: ' + error.toString())
    })
  };

  const getMonthFromDate = (date) => {
    return ("0" + (date.getMonth() + 1)).slice(-2);
  }

  const getDayFromDate = (date) => {
    return ("0" + date.getDate()).slice(-2);
  }

  const getHoursMinsFromDate = (date) => {
    return  ("0" + date.getHours().toString()).slice(-2) + ("0" + date.getMinutes()).slice(-2);
  }

  const powerReportHeaderDateTime = () => {
    let currentDate = new Date();
    return currentDate.getFullYear() +
           getMonthFromDate(currentDate) +
           getDayFromDate(currentDate) + "_" +
           getHoursMinsFromDate(currentDate)
  }

  const powerTradeTabs = powerTrades?.map((pt, i) => {
    return(
         <Tab>{"Position " + (i + 1)}</Tab>
    )
  })

  const displayPowerTrades = powerTrades?.map((pt, i) => {
      return(  
        <TabPanel>
          <PowerTrade powerTrade={pt} />
        </TabPanel>
      )
    })
             
  return (
    <div className="App"> 
      <header className="App-header">Petroineos Intra-day Power Report</header>
      <h3 data-testid="header">{'PowerPosition_' + powerReportHeaderDateTime()}</h3>
      <div style={{display: "flex", marginLeft: 15}}>
        <Tabs style={{width: 650, padding: 10, borderStyle: "outset"}}>
          <TabList>
            {powerTradeTabs}    
          </TabList>
          {displayPowerTrades}
        </Tabs>
        <div style={{marginLeft: 10, marginTop: -5}}>
          <PowerSummary powerTrades={powerTrades} />
        </div>
      </div>
    </div>
  );
}

export default App;

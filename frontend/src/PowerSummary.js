import { useState, useEffect } from 'react';
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'


const PowerSummary = ({ powerTrades }) => {

    const columnDefs = [  
        {field: 'localTime'},
        {field: 'volume'}
      ];

      let rowData = null;

    const getPowerVolumesSummary =  () => {
        let summaryPowerVolumesArray = new Array(24).fill({localTime: ":00", volume: 0})
        let totalPowerPeriodVolume = 0;
        for(let i=0; i<24; i++){
            powerTrades?.map((pt) => {
                totalPowerPeriodVolume += pt.periods[i].volume;
            });

            let period = { localTime: ("0" + (i + 23)%24).slice(-2) + ":00", volume: totalPowerPeriodVolume};
            totalPowerPeriodVolume = 0;
            summaryPowerVolumesArray[i] = period;
        }
      
        rowData = summaryPowerVolumesArray?.map((element) => {
            return  {localTime: element.localTime, volume: element.volume}
        });
    }

    return(
        <div>
            <h3>Power Positions summary</h3> 
            <div className='ag-theme-alpine-dark' style={{height: 680, width: 620}}>
            {getPowerVolumesSummary()}
            <AgGridReact 
                columnDefs={columnDefs}
                rowData={rowData}
            />
            </div>
        </div>
    )
};

export default PowerSummary;
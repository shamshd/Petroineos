import { useState } from 'react';
import {AgGridReact} from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'

const PowerTrade = ({ powerTrade }) => {
 
    const rowData = powerTrade.periods?.map((period) => {
        return  {period: period.period, volume: period.volume}
    });

    const [columnDefs, setColumnDefs] = useState([  
        {field: powerTrade.date.slice(0,10) },
        {field: 'period'},
        {field: 'volume'}
      ])

    return(
      <div>
        <div className='ag-theme-alpine-dark' style={{height: 680, width: 620}}>
            <AgGridReact 
                columnDefs={columnDefs}
                rowData={rowData}
            />   
        </div>
     </div>
    )
};

export default PowerTrade;
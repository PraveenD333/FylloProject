import React from 'react'
import { data } from '../Data/fertilizerData';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const DataTable = () => {

  const rowData = data.map(d => ({
    ...d,
    requirement: Number(d.requirement),
    availability: Number(d.availability),
  }));

  const columnDefs = [
    { headerName: 'ID', field: 'id', sortable: true, filter: 'agSetColumnFilter'},
    { headerName: 'Year', field: 'year', filter: 'agSetColumnFilter'},
    { headerName: 'Month', field: 'month', filter: 'agSetColumnFilter'},
    { headerName: 'Product', field: 'product', filter: 'agSetColumnFilter'},
    { headerName: 'State', field: 'state', filter: 'agSetColumnFilter'},
    { headerName: 'Requirement', field: 'requirement', sortable: true,filter: 'agNumberColumnFilter'},
    { headerName: 'Availability', field: 'availability', sortable: true,filter: 'agNumberColumnFilter'}
  ];

  return (
    <div className='ag-theme-alpine text-black' style={{height:'100vh', width: '100%'}}> 
      <AgGridReact 
        rowData={rowData} 
        columnDefs={columnDefs}
        pagination={true}
      />
    </div>
  )
}

export default DataTable;

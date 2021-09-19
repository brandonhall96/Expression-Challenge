import { formatDate } from '@elastic/eui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



import {
  EuiBasicTable,
  EuiLink,
  EuiHealth,
} from '@elastic/eui';







const Table = () => {
  const columns = [
    {
      field: 'title',
      name: 'Title',
      
        
    },
    {
      field: 'city',
      name: 'City',
      truncateText: true,
      
    },
    
    {
      field: 'state',
      name: 'State',
      dataType: 'string',
   
    },
    {
      field: 'date',
      name: 'Date',
      
    },
    {
      field: 'siteNumber',
      name: 'Site number',
      dataType: 'boolean',
      
    },
  ];

  

  const getRowProps = (item) => {
    const { id } = item;
    return {
      'data-test-subj': `row-${id}`,
      className: 'customRowClass',
      onClick: () => {},
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: 'customCellClass',
      'data-test-subj': `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  

    const [siteData, setSiteData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    
    
    useEffect(() =>{
        let url = 'http://localhost:8080/api/site/'
        axios.get(url)
        .then((res) =>{
            setSiteData(res.data.sites)
            console.log(res.data.sites);
            setIsLoaded(true);
            
        })
    }, [])
    
    useEffect(() => {
        
        
        
    },[siteData])

  return (

    isLoaded ? 
    <EuiBasicTable
      items={siteData}
      rowHeader="firstName"
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
    :null
  );
};

export default Table;
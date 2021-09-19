import { formatDate } from '@elastic/eui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



import {
  EuiBasicTable,
  EuiLink,
  EuiHealth,
} from '@elastic/eui';

/*
Example user object:

{
  id: '1',
  firstName: 'john',
  lastName: 'doe',
  github: 'johndoe',
  dateOfBirth: Date.now(),
  nationality: 'NL',
  online: true
}

Example country object:

{
  code: 'NL',
  name: 'Netherlands',
  flag: '🇳🇱'
}
*/





const Table = () => {
  const columns = [
    {
      field: 'title',
      name: 'Title',
      sortable: true,
      'data-test-subj': 'firstNameCell',
      mobileOptions: {
        render: (item) => (
          <span>
            {item.firstName}{' '}
            <EuiLink href="#" target="_blank">
              {item.lastName}
            </EuiLink>
          </span>
        ),
        header: false,
        truncateText: false,
        enlarge: true,
        fullWidth: true,
      },
    },
    {
      field: 'city',
      name: 'City',
      truncateText: true,
      render: (name) => (
        <EuiLink href="#" target="_blank">
          {name}
        </EuiLink>
      ),
      mobileOptions: {
        show: false,
      },
    },
    
    {
      field: 'state',
      name: 'State',
      dataType: 'string',
      render: (date) => formatDate(date, 'dobLong'),
    },
    {
      field: 'date',
      name: 'Date',
      render: (countryCode) => {
     
        
      },
    },
    {
      field: 'siteNumber',
      name: 'Site number',
      dataType: 'boolean',
      render: (online) => {
        const color = online ? 'success' : 'danger';
        const label = online ? 'Online' : 'Offline';
        return <EuiHealth color={color}>{label}</EuiHealth>;
      },
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
    
    
    useEffect(() =>{
        let url = 'localhost:8080/api/site/'
        axios.get(url)
        .then((res) =>{
            setSiteData(res.data.site)
            console.log(res);
            
        })
    }, [])
    
    useEffect(() => {
        
        
        
    },[siteData])

  return (
    <EuiBasicTable
      items={siteData}
      rowHeader="firstName"
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
  );
};

export default Table;
import { formatDate } from '@elastic/eui';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';



import {
  EuiBasicTable,
  EuiHealth,
  EuiButton,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFieldText,
  EuiFormRow

} from '@elastic/eui';



const Table = () => {

    const [siteData, setSiteData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [title, setTitle] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [date, setDate] = useState('');
    const [siteNumber, setSiteNumber] = useState('');
    const [nights, setNights] = useState('');


    const handleTitle = (e) => {
        setTitle(e.target.value);
        // console.log(title)
    }
    
    const handleCity = (e) => {
        setCity(e.target.value);
    
    }

    const handleState = (e) => {
        setState(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleSiteNumber = (e) => {
        setSiteNumber(e.target.value);
    }

    const handleNights = (e) => {
        setNights(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {title, city, state, date, siteNumber, nights}
        let url = 'http://localhost:8080/api/site/'
        axios.post(url, payload)
        .then( res => {
            
            console.log(res)
        })
    }



    const handleDelete = async (id) => {
        
        let url = `http://localhost:8080/api/site/${id}`
        axios.delete(url)
        .then( res => {
            let url = 'http://localhost:8080/api/site/'
            axios.get(url)
            .then((res) =>{
            setSiteData(res.data.sites)
            console.log(res.data.sites);
            setIsLoaded(true);
            
        })
            
            console.log(res)
        })

    }




  const columns = [
    {
        name: 'Actions',
        render: (item) => {
            return(
                <EuiButton
                color='primary' iconType='documentEdit' onClick 
                
                 />

            )
        }

    },


    {
      field: 'title',
      name: 'Title',
      sortable: true,
      
        
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
    {
      field: 'nights',
      name: 'Nights',
      
    },
    {
        name: 'Actions',
        render: (item) => {
            
            return (
                <EuiButton 
                    color='danger' iconType='trash' onClick={() => handleDelete(item._id)}
                />
            )

        }

    }
    

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

  

    
    
    useEffect(() =>{
        let url = 'http://localhost:8080/api/site/'
        axios.get(url)
        .then((res) =>{
            setSiteData(res.data.sites)
            console.log(res.data.sites);
            setIsLoaded(true);
            
        })
    }, [])
    
   
    





  return (
      <div>

    <EuiFlexGroup style={{ maxWidth: 600 }}>
        <EuiFlexItem>
        <EuiFormRow label="Title" >
            <EuiFieldText
            placeholder="Title"
            value={title}
            onChange={handleTitle}
            />
        </EuiFormRow>
        <EuiFormRow label="City" >
            <EuiFieldText
            placeholder="City"
            value={city}
            onChange={handleCity}
            />
        </EuiFormRow>
        <EuiFormRow label="State" >
            <EuiFieldText
            placeholder="State"
            value={state}
            onChange={handleState}
            />
        </EuiFormRow>
        <EuiFormRow label="Date" >
            <EuiFieldText
            placeholder="Date"
            value={date}
            onChange={handleDate}
            />
        </EuiFormRow>
        <EuiFormRow label="Site Number" >
            <EuiFieldText
            placeholder="Site Number"
            value={siteNumber}
            onChange={handleSiteNumber}
            />
        </EuiFormRow>
        <EuiFormRow label="Nights" >
            <EuiFieldText
            placeholder="Nights"
            value={nights}
            onChange={handleNights}
            />
        </EuiFormRow>
        </EuiFlexItem>

        <EuiFlexItem grow={false}>
        <EuiFormRow hasEmptyLabelSpace>
            <EuiButton type="submit" onClick={handleSubmit}>Submit</EuiButton>
        </EuiFormRow>
        </EuiFlexItem>
    </EuiFlexGroup>

   

    { isLoaded ? 

    <EuiBasicTable
      items={siteData}
      rowHeader="firstName"
      columns={columns}
      rowProps={getRowProps}
      cellProps={getCellProps}
    //   selection={selection}
    />
    :null
}
    </div>
  );
};

export default Table;
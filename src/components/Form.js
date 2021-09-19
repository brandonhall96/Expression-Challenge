import ReactDOM from 'react-dom';
import '@elastic/eui/dist/eui_theme_amsterdam_light.css';
import React, { useEffect, useState} from 'react';
import axios from 'axios';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
} from '@elastic/eui';


const formValue = (props) => {
    
        const [title, setTitle] = useState('');
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [date, setDate] = useState('');
        const [siteNumber, setSiteNumber] = useState('');
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
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



}

const Form = () => {
        const [title, setTitle] = useState('');
        const [city, setCity] = useState('');
        const [state, setState] = useState('');
        const [date, setDate] = useState('');
        const [siteNumber, setSiteNumber] = useState('');

    
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {title, city, state, date, siteNumber}
        let url = 'http://localhost:8080/api/site/'
        axios.post(url, payload)
        .then( res => {
            console.log(res)
        })

    }

    return(
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
            </EuiFlexItem>
        
            <EuiFlexItem grow={false}>
            <EuiFormRow hasEmptyLabelSpace>
                <EuiButton type="submit" onClick={handleSubmit}>Submit</EuiButton>
            </EuiFormRow>
            </EuiFlexItem>
        </EuiFlexGroup>
)
    };

export default Form;
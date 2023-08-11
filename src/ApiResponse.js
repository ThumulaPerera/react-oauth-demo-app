import Typography from '@mui/joy/Typography';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

import React, { useState, useEffect } from "react";
import './App.css';

const ApiUrl = window.config.oauth2ProxyBaseUrl + window.config.apiPrefix + window.config.itemsEndpoint;

function ApiResponse() {
    const [response, setResponse] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchResponse();
    }, []);

    const fetchResponse = async () => {
        setIsFetching(true);
        fetch(ApiUrl)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("API returned an error. Status: " 
                        + response.status 
                        + "("  
                        + response.statusText
                        + ")");
                }
                return response.text();
            })  
            .then(body => {
                console.log("Response fetched :");
                console.log(body);
                setResponse(body);
            })
            .catch(error => {
                console.log("Error fetching API");
                console.log(error);
            })
        setIsFetching(false);
    };

    return (
        <>  
            <Typography level='h6'>Response from API</Typography>
            <br />
            {isFetching ?
                <CircularProgress variant="plain" />
                :
                <>
                    <pre style={{ maxWidth: '100%', overflowX: 'scroll' }}>{response}</pre>
                    <br />
                    <Button color="primary" variant="outlined" onClick={fetchResponse}>Refresh</Button>
                </>
            }
        </>
    );
}

export default ApiResponse;
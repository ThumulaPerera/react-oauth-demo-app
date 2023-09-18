import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

import React, { useState, useEffect } from "react";
import { performGetWithRetry } from './api/ApiClient';
import './App.css';

const apiUrl = window.config.apiPrefix + window.config.itemsEndpoint;

function ApiResponse() {
    const [response, setResponse] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchResponse();
    }, []);

    const fetchResponse = () => {
        setIsFetching(true);
        setError(null);
        performGetWithRetry(apiUrl)
            .then(response => {
                // Handle the successful response
                setResponse(response);
            })
            .catch(error => {
                // Handle the error
                setResponse([]);
                setError(error);
            })
            .finally(() => {
                setIsFetching(false); // This will be executed regardless of success or error
            });
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
            {error && <p className="error">{error.message}</p>}
        </>
    );
}

export default ApiResponse;
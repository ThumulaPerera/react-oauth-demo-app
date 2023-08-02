import Typography from '@mui/joy/Typography';
import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

import React, { useState, useEffect } from "react";
import './App.css';

const itemsAPI = "http://localhost:4180/rbln/dummy-item-service/api-e04/1.0.0/items";

function ItemList() {
    const [items, setItems] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        setIsFetching(true);
        fetch(itemsAPI)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error("Items API returned an error. Status: " 
                        + response.status 
                        + "("  
                        + response.statusText
                        + ")");
                }
                return response.json();
            })  
            .then(jsonData => {
                console.log("Items fetched :");
                console.log(jsonData);
                setItems(jsonData);
            })
            .catch(error => {
                console.log("Error fetching items");
                console.log(error);
            })
        setIsFetching(false);
    };

    const listItems = items.map(item =>
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </tr>
    );

    return (
        <>  
            <Typography level='h6'>Available Items</Typography>
            <br />
            {isFetching ?
                <CircularProgress variant="plain" />
                :
                <>
                    <Table variant='outlined'>
                        <thead>
                            <tr>
                                <th style={{ width: '75%' }}>Item</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listItems}
                        </tbody>
                    </Table>
                    <br />
                    <Button color="primary" variant="outlined" onClick={fetchItems}>Refresh List</Button>
                </>
            }
        </>
    );
}

export default ItemList;
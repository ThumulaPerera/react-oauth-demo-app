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
        const response = await fetch(itemsAPI);
        const jsonData = await response.json();
        console.log(jsonData);
        setItems(jsonData);
        setIsFetching(false);
    };

    const listItems = items.map(item =>
        <li key={item.id}>
            {item.name + " : " + item.price}
        </li>
    );

    return (
        <>
            <h3>Available Items</h3>
            {isFetching ?
                <p>Loading...</p>
                :
                <>
                    <ul>{listItems}</ul>
                    <button onClick={fetchItems}>Refresh List</button>
                </>
            }
        </>
    );
}

export default ItemList;
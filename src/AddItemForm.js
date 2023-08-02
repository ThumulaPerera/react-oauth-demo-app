import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';

import { useState } from 'react';

const itemsAPI = "http://localhost:4180/rbln/dummy-item-service/api-e04/1.0.0/items";

function AddItemForm() {
    const [inputs, setInputs] = useState({});
    const [isError, setIsError] = useState(false);

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      addItem();
    }

    const addItem = async () => {
        fetch(itemsAPI, {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: inputs.name, price: parseInt(inputs.price) }),
        }).then(response => {
            if (response.status !== 201) {
                throw new Error("Items API returned an error. Status: " 
                    + response.status 
                    + "("  
                    + response.statusText
                    + ")");
            }
            return response.json();
        }).then(jsonData => {
            console.log("Item added :");
            console.log(jsonData);
            setInputs({});
        })
        .catch(error => {
            console.log("Error adding item");
            console.log(error);
            setIsError(true);
        })
    };


    return (
        <form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                name="name" 
                placeholder="Item name"
                value={inputs.name || ""} 
                onChange={handleChange}
            />
            <Input 
                type="number" 
                name="price" 
                placeholder="Item price"
                value={inputs.price || ""} 
                onChange={handleChange}
            />
            <br />
            <br />
            <Button type="submit">Add Item</Button>
            {isError && <p>Something went wrong. Please try again later.</p>}
        </form>
    );
}

export default AddItemForm;
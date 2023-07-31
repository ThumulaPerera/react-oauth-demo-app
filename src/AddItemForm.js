import { useState } from 'react';

const itemsAPI = "http://localhost:4180/rbln/dummy-item-service/api-e04/1.0.0/items";

function AddItemForm() {
    const [inputs, setInputs] = useState({});

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
        const response = await fetch(itemsAPI, {
            method: "POST", 
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: inputs.name, price: parseInt(inputs.price) }),
        });
        const result = await response.json();
        console.log(result);
        setInputs({});
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>Item name:
            <input 
                type="text" 
                name="name" 
                value={inputs.name || ""} 
                onChange={handleChange}
            />
            <br />
            </label>
            <label>Item price:
            <input 
                type="number" 
                name="price" 
                value={inputs.price || ""} 
                onChange={handleChange}
            />
            </label>
            <br />
            <input type="submit" value="Add Item" />
        </form>
    );
}

export default AddItemForm;
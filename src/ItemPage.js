import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

function ItemPage() {
  return (
    <div className="App">
        <h2>Items</h2>
        <ItemList />
        <hr />
        <AddItemForm />
    </div>
  );
}

export default ItemPage;
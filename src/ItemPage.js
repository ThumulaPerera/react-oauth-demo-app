import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import ItemList from './ItemList';
import AddItemForm from './AddItemForm';

function ItemPage() {
  return (
    <div className="App">
        <Typography level='h3'>Items</Typography>
        <Divider />
        <br />
        <ItemList />
        <br />
        <br />
        <Divider />
        <br />
        <AddItemForm />
    </div>
  );
}

export default ItemPage;
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

import ApiResponse from './ApiResponse';

function ProtectedPage() {
  return (
    <div className="App">
        <Typography level='h3'>Protected Page</Typography>
        <Divider />
        <br />
        <ApiResponse />
    </div>
  );
}

export default ProtectedPage;
import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

function LandingPage({ userInfo }) {
  let username = userInfo?.user ? userInfo.email : "anonymous user";

  return (
    <div className="App">
      <Typography level='h3'>React SPA</Typography>
      <Divider />
      <br />
      <Typography level='body1'>Welcome, {username} !</Typography>
    </div>
  );
}

export default LandingPage;
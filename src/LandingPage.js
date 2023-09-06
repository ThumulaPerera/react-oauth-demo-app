import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

const testConfig = window.config.testConfig;

function LandingPage({ userInfo }) {
  let username = userInfo ? userInfo.email : "anonymous user";

  return (
    <div className="App">
      <Typography level='h3'>React SPA</Typography>
      <Divider />
      <br />
      <Typography level='body1'>Welcome, {username} !</Typography>
      <Typography level='body1'>Test config value: {testConfig}</Typography>
    </div>
  );
}

export default LandingPage;
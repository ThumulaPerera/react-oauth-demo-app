import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

const appName = window.config.appName;
const appDescription = window.config.appDescription;

function LandingPage({ userInfo }) {
  let username = userInfo ? userInfo.email : "anonymous user";

  return (
    <div className="App">
      <Typography level='h3'>{appName}</Typography>
      <Typography level='body1'>{appDescription}</Typography>
      <Divider />
      <br />
      <Typography level='body1'>Welcome, {username} !</Typography>
    </div>
  );
}

export default LandingPage;
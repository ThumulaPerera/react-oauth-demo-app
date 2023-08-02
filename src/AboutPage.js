import Typography from '@mui/joy/Typography';
import Divider from '@mui/joy/Divider';

function AboutPage() {
    return (
        <div className="App">
            <Typography level='h3'>About</Typography>
            <Divider />
            <br />
            <Typography level="body1">This is the about page.</Typography>
        </div>
    );
}

export default AboutPage;
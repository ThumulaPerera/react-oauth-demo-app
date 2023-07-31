function LandingPage({ userInfo }) {
  let username = userInfo?.user ? userInfo.email : "anonymous user";

  return (
    <div className="App">
      <h2>React SPA</h2>
      <h3>Welcome, {username} !</h3>
    </div>
  );
}

export default LandingPage;
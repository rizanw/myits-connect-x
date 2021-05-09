import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { useSelector } from 'react-redux';
import VRApp from './VRApp';

import LoginDialog from './components/LoginDialog';

function App() {
  const authState = useSelector((state) => state.auth);

  console.log(authState);

  return (
    <div>
      {authState.email ? <div /> : <LoginDialog />}
      <VRApp />
    </div>
  );
}

export default App;

import React from 'react';
import { invoke } from '@forge/bridge';

function App() {
  const clone = async () => {
    try {
      const result = await invoke('cloneIssue');
      console.log('Clone result:', result);
      alert(`Cloned from ${result.original}`);
    } catch (e) {
      console.error(e);
      alert('Cloning failed');
    }
  };

  return (
    <div>
      <button onClick={clone}>
        Clone issue with children & links
      </button>
    </div>
  );
}

export default App;
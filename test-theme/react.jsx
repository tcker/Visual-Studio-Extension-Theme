import React from 'react';

function App() {
  // Function to render the heading
  const renderHeading = () => {
    return (
      <h1 style={{ fontSize: '3em', textAlign: 'center' }}>
        Hello, World!
      </h1>
    );
  };

  // Main render function
  return (
    <div>
      {/* Render the heading */}
      {renderHeading()}
    </div>
  );
}

export default App;

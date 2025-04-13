import React from 'react';

function StyledButtonInline() {
  const buttonStyle = {
    backgroundColor: 'skyblue',
    padding: '10px 20px',
    fontSize: '16px',
  };

  return <button style={buttonStyle}>Click Me (Inline)</button>;
}

export default StyledButtonInline;

import React from 'react';

function StyledButtonInternal() {
  return (
    <div>
      <style>
        {`
          .internal-button {
            background-color: lightgreen;
            padding: 12px 24px;
            font-size: 18px;
            border: none;
            border-radius: 5px;
          }
        `}
      </style>
      <button className="internal-button">Click Me (Internal)</button>
    </div>
  );
}

export default StyledButtonInternal;

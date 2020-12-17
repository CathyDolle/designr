import React from 'react';

function itemContent({infoName, children}) {
  return (
    <>
      <h2>{infoName}</h2>
      <div className="itemContent">
        {children}
      </div>
    </>
  );
}

export default itemContent;
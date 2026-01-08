import React from 'react';

const PdfViewer = () => {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <iframe
        src="/pdf/Buyers_Packet.pdf"
        width="100%"
        height="100%"
        title="Buyer's Packet PDF"
        className="border-0"
      />
    </div>
  );
};

export default PdfViewer;
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Button } from '@material-ui/core';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function PDFViewer({ file }) {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  };

  return (
    <div className="pdfHolder">
      <div>
      {file &&
        <Document id='pdf' file={file} onLoadSuccess={onDocumentLoadSuccess}>         
          <Page pageNumber={pageNumber}/>
        </Document>
      }
      {file &&
        <div>
          <p>
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </p>
          <Button
            disabled={pageNumber <= 1}
            id={pageNumber <= 1 ? 'disabled' : 'button'}
            onClick={() => changePage(-1)}
            variant='contained'>
            Previous
          </Button>
          <Button
            disabled={pageNumber >= numPages}
            id={pageNumber >= numPages ? 'disabled' : 'button'}
            onClick={() => changePage(1)}
            variant='contained'>
            Next
          </Button>
        </div>
      }
      </div>
    </div>
  );
}
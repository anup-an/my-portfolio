import "./Experience.scss";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const Experience = () => {
  const [numPages, setNumPages] = useState<number|null>(null);
    function onDocumentLoadSuccess({ numPages }: {numPages: number}) {
    setNumPages(numPages);
  }

  return (
    <div className="experience">
      <div>
        <Document
          file="/assets/anup-poudel-cv.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`}>
            <Page  pageNumber={index + 1} />
            </div>
      ))}
        </Document>
        
        
      </div>
    </div>
  );
};

export default Experience;

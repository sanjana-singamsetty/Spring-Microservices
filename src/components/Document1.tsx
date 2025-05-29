// src/components/MyPDFViewer.tsx
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Sidebar from "./Sidebar";

// Load the PDF worker from a CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MyPDFViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Sidebar />
      <div
        style={{
          width: "100%",
          height: "90vh",
          overflowY: "auto",
          padding: "1rem",
        }}
      >
        <Document
          file="/Master+Microservices+with+SpringBoot,Docker,Kubernetes.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading="Loading PDF..."
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={1500}
              renderAnnotationLayer={true}
              renderTextLayer={true}
            />
          ))}
        </Document>
      </div>
    </>
  );
};

export default MyPDFViewer;

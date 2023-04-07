import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Document, Page } from "react-pdf";
import { getFile } from "../../../api/getfile.api";
import { LoginContext } from "../../../App";
import { DocContainer, InfoContainer } from "./InfoPage.style";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function InfoPage() {
  const contest = 3;
  const type = "subjects";
  const [documentObject, setDocumentObject] = useState();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFile(contest, type);
      console.log(response);
      setDocumentObject(response);
    };
    fetchData();
  }, []);

  const isSignIn = useContext(LoginContext).isSignIn;
  const pdfProps = { data: documentObject };
  return (
    <InfoContainer>
      <DocContainer>
        <Document
          file={pdfProps}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => (
              <Page pageNumber={page} renderTextLayer={false} renderAnnotationLayer={false}/>
            ))}
        </Document>
      </DocContainer>
    </InfoContainer>
  );
}

export default InfoPage;

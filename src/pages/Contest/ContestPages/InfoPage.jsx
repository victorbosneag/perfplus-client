import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Document, Page } from "react-pdf";
import { getFile } from "../../../api/getfile.api";
import { LoginContext } from "../../../App";
import { DocContainer, InfoContainer } from "./InfoPage.style";
import { pdfjs } from "react-pdf";
import { SubmitButton } from "../../../components/formBox/style";
import convertToBase64 from "../../../utils/convertToBase64.util";
import getToken from "../../../utils/gettoken.util";
import { addfile } from "../../../api/addfile.api";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
function InfoPage() {
  const contest = 3;
  const type = "subjects";
  const [documentObject, setDocumentObject] = useState();
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getFile(contest, type);
      console.log(response);
      setDocumentObject(response);
    };
    fetchData();
  }, []);

  const isSignIn = useContext(LoginContext).isSignIn;
  const handleSubmit = async (event) => {
    event.preventDefault();
    const selectedFile = event.target.firstChild.files[0];
    if (selectedFile.type !== "application/pdf") {
      alert("Must upload file of type PDF!");
    } else {
      const fileBase64 = await convertToBase64(selectedFile);
      const requestData = {
        token: getToken(),
        contest: contest,
        type: "subjects",
        fileData: fileBase64,
      };
      const response = await addfile(requestData);
      console.log(response);
    }
  };
  const pdfProps = { data: documentObject };
  return (
    <InfoContainer>
      {isSignIn ? (
        <form onSubmit={handleSubmit}>
          <input type="file" />
          <SubmitButton type="input">Submit</SubmitButton>
        </form>
      ) : (
        <></>
      )}
      <DocContainer>
        <Document
          file={pdfProps}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map((page) => (
              <Page
                pageNumber={page}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
        </Document>
      </DocContainer>
    </InfoContainer>
  );
}

export default InfoPage;
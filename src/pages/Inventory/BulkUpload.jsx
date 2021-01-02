import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import Container from "../../Container/Container";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { bulkUpload_Inventory } from "../../ApiService";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function MyDropzone() {
  const history = useHistory();
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      console.log(acceptedFiles);
      const fomrData = new FormData();
      fomrData.append("xlsxFile", acceptedFiles[0]);
      bulkUpload_Inventory(fomrData).then(() => {
        toast.success("Added customer success");
        history.push("/ListInventory");
      });
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  return (
    <Container>
      <div className="p-4">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the only excel files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
      </div>
    </Container>
  );
}

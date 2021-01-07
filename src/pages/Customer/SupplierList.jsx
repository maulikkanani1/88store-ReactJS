import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";

import Container from "../../Container/Container";
import { getAllSupplier } from "../../ApiService";

export default function SupplierList() {
  const history = useHistory();
  const [allSupplier, setallSupplier] = useState([]);

  useEffect(() => {
    getAllSupplier().then(({ data }) => {
      setallSupplier(data.success.data);
    });
  }, []);

  const editSupplier = (index) => {
    history.push({
      pathname: "/AddSupplier",
      state: allSupplier[index],
    });
  };

  const options = {
    filterType: "checkbox",
  };

  const columns = [
    {
      name: "supplierName",
      label: " Name",
    },
    {
      name: "supplierEmail",
      label: " Email",
    },
    {
      name: "supplierPhoneNumber",
      label: " PhoneNumber",
    },
    {
      name: "supplierGST",
      label: " GST",
    },
    {
      name: "supplierAddress",
      label: " Address",
    },
    {
      name: "Edit",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, { rowIndex }) => {
          return <EditIcon onClick={() => editSupplier(rowIndex)} />;
        },
      },
    },
  ];

  return (
    <Container>
      <div className="card card-solid">
        <MUIDataTable title={"Supplier List"} data={allSupplier} columns={columns} options={options} />
      </div>
    </Container>
  );
}

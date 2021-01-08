import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { toast } from "react-toastify";

import Container from "../../Container/Container";
import { getAllSupplier,deleteSupplier } from "../../ApiService";

export default function SupplierList() {
  const history = useHistory();
  const [allSupplier, setallSupplier] = useState([]);

  const getData = () => {
    getAllSupplier().then(({ data }) => {
      setallSupplier(data.success.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const editSupplier = (index) => {
    history.push({
      pathname: "/AddSupplier",
      state: allSupplier[index],
    });
  };

  const _deleteSupplier = (index) => {
    const { _id } = allSupplier[index];
    deleteSupplier(_id).then(() => {
      toast.warning("Deleted supplier");
      getData();
    });
  };

  const options = {
    filterType: "checkbox",
    selectableRows: false,
  };

  const columns = [
    {
      name: "supplierName",
      label: "Name",
    },
    {
      name: "supplierEmail",
      label: "Email",
    },
    {
      name: "supplierPhoneNumber",
      label: "Phone Number",
    },
    {
      name: "supplierGST",
      label: "GST",
    },
    {
      name: "supplierAddress",
      label: "Address",
    },
    {
      name: "Action",
      options: {
        filter: true,
        sort: false,
        empty: true,
        customBodyRender: (value, { rowIndex }) => {
          return (
            <div className="d-flex justify-content-between">
              <EditIcon onClick={() => editSupplier(rowIndex)} />
              <DeleteIcon onClick={() => _deleteSupplier(rowIndex)} />
            </div>
          );
        },
      },
    },
  ];

  return (
    <Container>
      <div className="card ">
        <MUIDataTable title={"Supplier List"} data={allSupplier} columns={columns} options={options} />
      </div>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import Container from "../../Container/Container";
import { getAllInventory, deleteInventory } from "../../ApiService";
import { toast } from "react-toastify";

export default function ListInventory() {
  const history = useHistory();
  const [allInventory, setallInventory] = useState([]);

  const getData = () => {
    getAllInventory().then(({ data }) => {
      setallInventory(data.success.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const editInventory = (index) => {
    history.push({
      pathname: "/AddInventory",
      state: allInventory[index],
    });
  };

  const performDeletion = (_id) => {
    deleteInventory(_id).then(() => {
      toast.warning("Deleted Inventory");
      getData();
    });
  };
  
  return (
    <Container>
      <div className="card card-solid">
        <div className="card-body pb-0">
          <div className="row d-flex align-items-stretch">
            {allInventory.map(({ SKUNumber, images, name, availableQuantity, priceOfPurchase, _id }, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-3 d-flex align-items-stretch">
                <div className="card bg-light">
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-7">
                        <h2 className="lead">
                          <br />
                          <b>{name}</b>
                        </h2>
                        <p className="text-muted text-sm">
                          <b>SKU Number: </b> {SKUNumber}
                        </p>
                        <p className="text-muted text-sm">
                          <b>Price : </b> {priceOfPurchase}
                        </p>
                        <p className="text-muted text-sm">
                          <b>Available Quantity : </b> {availableQuantity}
                        </p>
                      </div>
                      <div className="col-5 text-center">
                        <br />
                        <img
                          src={`http://139.59.46.91:3001/InventoryImage/${images[0]}`}
                          alt=""
                          className="img img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <div className="text-right">
                      <button onClick={() => editInventory(index)} className="btn btn-sm btn-primary mr-2">
                        EDIT
                      </button>
                      <button onClick={() => performDeletion(_id)} className="btn btn-sm btn-primary">
                        <i className="fas fa-trash "></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-footer">
            <nav aria-label="Contacts Page Navigation">
              <ul className="pagination justify-content-center m-0">
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    8
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Container>
  );
}

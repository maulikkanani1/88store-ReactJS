import React, { useEffect, useState } from "react";
import { GetdashboardData } from "../ApiService";
import NavBar from "../Container/NavBar";
import SideBar from "../Container/SideBar";

function DashBoard() {
  const [allCountData, setallCountData] = useState({
    GSTToBePaid: 0,
    compleateOrder: 0,
    customerOrder: 0,
    lastUpdate: "",
    orderOfThisMonth: 2,
    orderOfThisWeek: 2,
    pendingOrder: 0,
    salesOrder: 0,
    totalItem: 0,
    totalOrder: 0,
    totalSales: 0,
    unavailable: 0,
  });

  useEffect(() => {
    GetdashboardData()
      .then(({ data }) => {
        setallCountData(data.success.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="hold-transition sidebar-mini layout-fixed">
      <div className="wrapper">
        <NavBar />

        <SideBar />

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section
            className="content"
            style={{ backgroundColor: "aquamarine" }}
          >
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <h3 className="m-0 text-dark">Orders</h3>
              <div className="row">
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{allCountData.pendingOrder}</h3>
                      <p>Pending Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>{allCountData.compleateOrder}</h3>
                      <p>Completed Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{allCountData.totalOrder}</h3>
                      <p>Total Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                {/* ./col */}
              </div>
              <h3 className="m-0 text-dark">Inventory</h3>
              <div className="row">
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{allCountData.totalItem}</h3>
                      <p>Total Items</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>
                        {new Date(allCountData.lastUpdate).toLocaleDateString()}
                      </h3>
                      <p>Last Updated</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{allCountData.unavailable}</h3>
                      <p>Unavailable</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                {/* ./col */}
              </div>
              <h3 className="m-0 text-dark">Sales</h3>
              <div className="row">
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{allCountData.customerOrder}</h3>
                      <p>Customer Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>{allCountData.salesOrder}</h3>
                      <p>Sales Person Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{allCountData.GSTToBePaid}</h3>
                      <p>Total GST to be Paid</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                {/* ./col */}
              </div>
              <div className="row">
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{allCountData.orderOfThisWeek}</h3>
                      <p>Orders This Week</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>{allCountData.orderOfThisMonth}</h3>
                      <p>Orders This Month</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>{allCountData.totalSales}</h3>
                      <p>Total Sales</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                {/* ./col */}
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-12 connectedSortable">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="fas fa-chart-pie mr-1" />
                        Sales
                      </h3>
                      <div className="card-tools">
                        <ul className="nav nav-pills ml-auto">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              href="#revenue-chart"
                              data-toggle="tab"
                            >
                              Area
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              href="#sales-chart"
                              data-toggle="tab"
                            >
                              Donut
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">
                        {/* Morris chart - Sales */}
                        <div
                          className="chart tab-pane active"
                          id="revenue-chart"
                          style={{ position: "relative", height: "300px" }}
                        >
                          <canvas
                            id="revenue-chart-canvas"
                            height={300}
                            style={{ height: "300px" }}
                          />
                        </div>
                        <div
                          className="chart tab-pane"
                          id="sales-chart"
                          style={{ position: "relative", height: "300px" }}
                        >
                          <canvas
                            id="sales-chart-canvas"
                            height={300}
                            style={{ height: "300px" }}
                          />
                        </div>
                      </div>
                    </div>
                    {/* /.card-body */}
                  </div>
                  {/* /.card */}
                  {/* DIRECT CHAT */}
                  {/* /.contacts-list-info */}
                  {/* /.card-body */}
                  {/* /.card-footer*/}
                </section>
              </div>
              {/*/.direct-chat */}
              {/* TO DO List */}
              {/* /.card-header */}
              {/* /.card */}
            </div>
          </section>
          {/* /.Left col */}
          {/* right col (We are only adding the ID to make the widgets sortable)*/}
          <section className="col-lg-16 connectedSortable">
            {/* Map card */}
            <div className="card bg-gradient-primary">
              <div className="card-header border-0">
                <h3 className="card-title">
                  <i className="fas fa-map-marker-alt mr-1" />
                  Visitors
                </h3>
                {/* card tools */}
                {/* /.card-body*/}
                <div className="card-footer bg-transparent">
                  <div className="row">
                    <div className="col-4 text-center">
                      <div id="sparkline-1" />
                      <div className="text-white">Visitors</div>
                    </div>
                    {/* ./col */}
                    <div className="col-4 text-center">
                      <div id="sparkline-2" />
                      <div className="text-white">Online</div>
                    </div>
                    {/* ./col */}
                    <div className="col-4 text-center">
                      <div id="sparkline-3" />
                      <div className="text-white">Sales</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card */}
              {/* solid sales graph */}
              <div className="card bg-gradient-info">
                <div className="card-header border-0">
                  <h3 className="card-title">
                    <i className="fas fa-th mr-1" />
                    Sales Graph
                  </h3>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn bg-info btn-sm"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn bg-info btn-sm"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <canvas
                    className="chart"
                    id="line-chart"
                    style={{
                      minHeight: "250px",
                      height: "250px",
                      maxHeight: "250px",
                      maxWidth: "100%",
                    }}
                  />
                </div>
                {/* /.card-body */}
                <div className="card-footer bg-transparent">
                  <div className="row">
                    <div className="col-4 text-center">
                      <input
                        type="text"
                        className="knob"
                        data-readonly="true"
                        defaultValue={20}
                        data-width={60}
                        data-height={60}
                        data-fgcolor="#39CCCC"
                      />
                      <div className="text-white">Mail-Orders</div>
                    </div>
                    <div className="col-4 text-center">
                      <input
                        type="text"
                        className="knob"
                        data-readonly="true"
                        defaultValue={50}
                        data-width={60}
                        data-height={60}
                        data-fgcolor="#39CCCC"
                      />
                      <div className="text-white">Online</div>
                    </div>
                    <div className="col-4 text-center">
                      <input
                        type="text"
                        className="knob"
                        data-readonly="true"
                        defaultValue={30}
                        data-width={60}
                        data-height={60}
                        data-fgcolor="#39CCCC"
                      />
                      <div className="text-white">In-Store</div>
                    </div>
                  </div>
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}
              {/* Calendar */}
              {/* /.card */}
            </div>
          </section>
          {/* right col */}
        </div>
        {/* /.row (main row) */}
      </div>

      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
    </div>
  );
}

export default DashBoard;

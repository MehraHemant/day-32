import React from "react";

const Dashboard = () => {
  let data = [
    {
      count: "10",
      title: "Total book Issued",
      color: "primary",
    },
    {
      count: "10",
      title: "Total book Returned",
      color: "warning",
    },
    {
      count: "0",
      title: "Total book Not Returned",
      color: "danger",
    },
    {
      count: "₹ 0",
      title: "Total Fines Received",
      color: "success",
    },
  ];
  return (
    <div>
      <h1 className="mb-5">Dashboard</h1>
      <div className="row">
        {data.map((el) => {
          return (
            <div className="col-xl-3 col-md-6">
              <div className={`card bg-${el.color} text-white mb-4`}>
                <div className="card-body">
                  <h1 className="text-center">{el.count}</h1>
                  <h5 className="text-center">{el.title}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;

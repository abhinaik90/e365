function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-3 bg-dark text-white vh-100">
          <h4 className="p-3">College ERP</h4>
          <ul className="list-unstyled p-3">
            <li className="mb-2">Students</li>
            <li className="mb-2">Faculty</li>
            <li className="mb-2">Attendance</li>
            <li className="mb-2">Exams</li>
          </ul>
        </div>

        <div className="col-md-9 p-4">
          <h2>Dashboard</h2>
          <div className="row mt-4">

            <div className="col-md-4">
              <div className="card p-3 shadow">
                <h5>Total Students</h5>
                <h3>1200</h3>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 shadow">
                <h5>Total Faculty</h5>
                <h3>150</h3>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
function StudentList() {
  return (
    <div>
      <div className="page-title">
        Student List
      </div>

      <div className="page-sub">
        View, filter, and manage student data across all branches
      </div>

      <div
        style={{
          display: "flex",
          gap: "8px",
          marginBottom: "16px",
          alignItems: "center"
        }}
      >
        <input
          placeholder="Search by name or roll number..."
          style={{
            flex: 1,
            padding: "8px 12px",
            border: ".5px solid var(--border)",
            borderRadius: "8px",
            fontSize: "13px"
          }}
        />

        <select
          style={{
            padding: "8px 10px",
            border: ".5px solid var(--border)",
            borderRadius: "8px",
            fontSize: "13px"
          }}
        >
          <option>All Branches</option>
          <option>CSE</option>
          <option>IT</option>
          <option>ECE</option>
          <option>BBA</option>
        </select>

        <select
          style={{
            padding: "8px 10px",
            border: ".5px solid var(--border)",
            borderRadius: "8px",
            fontSize: "13px"
          }}
        >
          <option>All Status</option>
          <option>Placed</option>
          <option>Not Placed</option>
        </select>

        <button className="btn btn-outline">
          <i className="ti ti-download"></i>
          Export(ftbm)
        </button>

        <button className="btn btn-primary">
          <i className="ti ti-upload"></i>
          Upload CSV (ftbm)
        </button>
      </div>

      <div
        className="card"
        style={{ padding: 0 }}
      >
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Branch</th>
                <th>CGPA</th>
                <th>Backlogs</th>
                <th>Status</th>
                <th>Applied</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Rahul Agrawal  (api to be call) </td> 
                <td>2021CSE001  (api to be call) </td>
                <td>CSE  (api to be call) </td>
                <td>8.4  (api to be call) </td>
                <td>0  (api to be call) </td>
                <td>
                  <span className="badge badge-warn">
                    Shortlisted (atbc)
                  </span>
                </td>
                <td>4 (atbc)</td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td>Vanshika Sharma  (api to be call) </td>
                <td>2021CSE042  (api to be call) </td>
                <td>CSE  (api to be call) </td>
                <td>9.1  (api to be call) </td>
                <td>0  (api to be call) </td>
                <td>
                  <span className="badge badge-success">
                    Placed
                  </span>
                </td>
                <td> 2 (api to be call) </td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td>Piyush Gupta  (api to be call) </td>
                <td>2021IT010 (atbc)</td>
                <td>IT (atbc)</td>
                <td>7.8 (atbc)</td>
                <td>0 (atbc)</td>
                <td>
                  <span className="badge badge-info">
                    Applied
                  </span>
                </td>
                <td>3 (atbc)</td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td>Ayushi Jain (atbc)</td>
                <td>2021CSE078 (atbc)</td>
                <td>CSE (atbc)</td>
                <td>8.0 (atbc)</td>
                <td>0 (atbc)</td>
                <td>
                  <span className="badge badge-info">
                    Applied
                  </span>
                </td>
                <td>5</td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    View (ftbm)
                  </button>
                </td>
              </tr>

              <tr>
                <td>Nilesh Verma (atbc) </td>
                <td>2021IT025 (atbc)</td>
                <td>IT(atbc)</td>
                <td>7.2(atbc)</td>
                <td>1 (atbc)</td>
                <td>
                  <span className="badge badge-gray">
                    Not Applied
                  </span>
                </td>
                <td>0</td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    View
                  </button>
                </td>
              </tr>

              <tr>
                <td>Khushboo Patel (atbc) </td>
                <td>2021BBA014 (atbc)</td>
                <td>BBA (atbc)</td>
                <td>8.8 (atbc)</td>
                <td>0(atbc)</td>
                <td>
                  <span className="badge badge-success">
                    Placed (ftbm)
                  </span>
                </td>
                <td>3</td>
                <td>
                  <button className="btn btn-outline btn-sm">
                    View (ftbm)
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default StudentList;
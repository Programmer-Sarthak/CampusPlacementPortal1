function MyApplications() {
  return (
    <div>
      <div className="page-title">
        My Applications
      </div>

      <div className="page-sub">
        Track your applications, interviews and results
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">
            Application History
          </div>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Applied On</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tata Consultancy Services</td>
                <td>Software Engineer</td>
                <td>20 May</td>
                <td>
                  <span className="badge badge-info">
                    Interview
                  </span>
                </td>
              </tr>

              <tr>
                <td>Infosys</td>
                <td>Systems Engineer</td>
                <td>18 May</td>
                <td>
                  <span className="badge badge-success">
                    Shortlisted
                  </span>
                </td>
              </tr>

              <tr>
                <td>Wipro</td>
                <td>Project Engineer</td>
                <td>15 May</td>
                <td>
                  <span className="badge badge-warn">
                    Applied
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default MyApplications;
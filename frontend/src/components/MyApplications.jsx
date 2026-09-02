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
                <td>Tata Consultancy Services (atbc)</td>
                <td>Software Engineer (atbc)</td>
                <td>20 May (atbc)</td>
                <td>
                  <span className="badge badge-info">
                    Interview
                  </span>
                </td>
              </tr>

              <tr>
                <td>Infosys (atbc)</td>
                <td>Systems Engineer (atbc)</td>
                <td>18 May (atbc)</td>
                <td>
                  <span className="badge badge-success">
                    Shortlisted
                  </span>
                </td>
              </tr>

              <tr>
                <td>Wipro (atbc)</td>
                <td>Project Engineer (atbc</td>0
                <td>15 May (atbc)</td>
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
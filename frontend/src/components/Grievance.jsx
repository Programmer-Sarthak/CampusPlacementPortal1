function Grievance() {
  return (
    <div>
      <div className="page-title">
        Report Grievance
      </div>

      <div className="page-sub">
        Raise a concern or issue with the placement cell
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">
            Submit Grievance
          </div>
        </div>

        <div className="form-grid">

          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Enter grievance subject"
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select>
              <option>Select category</option>
              <option>Placement Drive</option>
              <option>Application</option>
              <option>Interview</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group full">
            <label>Description</label>
            <textarea
              rows="5"
              placeholder="Describe your grievance..."
            ></textarea>
          </div>

        </div>

        <button className="btn btn-primary">
          Submit Grievance
        </button>
      </div>
    </div>
  );
}
export default Grievance;
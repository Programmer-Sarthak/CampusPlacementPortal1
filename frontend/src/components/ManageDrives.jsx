import { useState } from "react";

function ManageDrives() {
  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  // drive
  const [drives, setDrives] = useState([
    {
      id: 1,
      companyName: "TCS",
      role: "Software Engineer",
      ctc: "6",
      driveType: "On-Campus",
      driveDate: "2026-05-26",
      lastApplyDate: "",
      minCgpa: "7",
      maxBacklogs: "0",
      eligibleBranches: "CSE, IT, ECE",
      status: "Active",
    },
    {
      id: 2,
      companyName: "Infosys",
      role: "Systems Engineer",
      ctc: "6",
      driveType: "On-Campus",
      driveDate: "2026-05-28",
      lastApplyDate: "",
      minCgpa: "7",
      maxBacklogs: "0",
      eligibleBranches: "All",
      status: "Active",
    },
    {
      id: 3,
      companyName: "Wipro",
      role: "Project Engineer",
      ctc: "5",
      driveType: "Pool Campus",
      driveDate: "2026-06-02",
      lastApplyDate: "",
      minCgpa: "6.5",
      maxBacklogs: "0",
      eligibleBranches: "CSE, IT",
      status: "Upcoming",
    },
    {
      id: 4,
      companyName: "HCL",
      role: "GET",
      ctc: "5",
      driveType: "On-Campus",
      driveDate: "2026-05-10",
      lastApplyDate: "",
      minCgpa: "6",
      maxBacklogs: "0",
      eligibleBranches: "All",
      status: "Closed",
    },
  ]);

  // form 
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    ctc: "",
    driveType: "On-Campus",
    driveDate: "",
    lastApplyDate: "",
    minCgpa: "",
    maxBacklogs: "",
    eligibleBranches: "CSE",
    jd: null,
    notes: "",
  });

  // i/p
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // u/s drive
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId !== null) {
      setDrives((prevDrives) =>
        prevDrives.map((drive) =>
          drive.id === editingId
            ? {
                ...drive,
                companyName: formData.companyName,
                role: formData.role,
                ctc: formData.ctc,
                driveType: formData.driveType,
                driveDate: formData.driveDate,
                lastApplyDate: formData.lastApplyDate,
                minCgpa: formData.minCgpa,
                maxBacklogs: formData.maxBacklogs,
                eligibleBranches: formData.eligibleBranches,
              }
            : drive
        )
      );

      alert("Drive updated successfully!");
    }

    else {
      const newDrive = {
        id: Date.now(),
        companyName: formData.companyName,
        role: formData.role,
        ctc: formData.ctc,
        driveType: formData.driveType,
        driveDate: formData.driveDate,
        lastApplyDate: formData.lastApplyDate,
        minCgpa: formData.minCgpa,
        maxBacklogs: formData.maxBacklogs,
        eligibleBranches: formData.eligibleBranches,
        status: "Upcoming",
      };

      setDrives((prevDrives) => [
        ...prevDrives,
        newDrive,
      ]);

      alert("Drive added successfully!");
    }

    // form reset
    resetForm();
  };

  // button
  const handleEdit = (drive) => {
    setEditingId(drive.id);

    setFormData({
      companyName: drive.companyName,
      role: drive.role,
      ctc: drive.ctc,
      driveType: drive.driveType,
      driveDate: drive.driveDate,
      lastApplyDate: drive.lastApplyDate,
      minCgpa: drive.minCgpa,
      maxBacklogs: drive.maxBacklogs,
      eligibleBranches:
        drive.eligibleBranches === "CSE, IT, ECE"
          ? "CSE"
          : drive.eligibleBranches,
      jd: null,
      notes: "",
    });

    setShowForm(true);

    
    setTimeout(() => {
      document
        .getElementById("add-drive")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 100);
  };


  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this drive?"
    );

    if (!confirmDelete) {
      return;
    }

    setDrives((prevDrives) =>
      prevDrives.filter((drive) => drive.id !== id)
    );

    alert("Drive deleted successfully!");
  };

  const resetForm = () => {
    setFormData({
      companyName: "",
      role: "",
      ctc: "",
      driveType: "On-Campus",
      driveDate: "",
      lastApplyDate: "",
      minCgpa: "",
      maxBacklogs: "",
      eligibleBranches: "CSE",
      jd: null,
      notes: "",
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleClear = () => {
    setFormData({
      companyName: "",
      role: "",
      ctc: "",
      driveType: "On-Campus",
      driveDate: "",
      lastApplyDate: "",
      minCgpa: "",
      maxBacklogs: "",
      eligibleBranches: "CSE",
      jd: null,
      notes: "",
    });
  };

  return (
    <div>


      <div className="page-title">
        Manage Drives
      </div>

      <div className="page-sub">
        Add, update or delete campus / pool campus drives
      </div>



      <div style={{ marginBottom: "16px" }}>
        <a
          href="#add-drive"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();

            setEditingId(null);

            setFormData({
              companyName: "",
              role: "",
              ctc: "",
              driveType: "On-Campus",
              driveDate: "",
              lastApplyDate: "",
              minCgpa: "",
              maxBacklogs: "",
              eligibleBranches: "CSE",
              jd: null,
              notes: "",
            });

            setShowForm(true);
          }}
        >
          + Add Drive
        </a>
      </div>


      {showForm && (
        <div
          className="card"
          id="add-drive"
        >
          <div className="card-header">
            <div className="card-title">
              {editingId !== null
                ? "Edit Drive"
                : "Add New Drive"}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">


              <div className="form-group">
                <label>Company Name</label>

                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group">
                <label>Role / Position</label>

                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>


              <div className="form-group">
                <label>CTC (LPA)</label>

                <input
                  type="number"
                  name="ctc"
                  value={formData.ctc}
                  onChange={handleChange}
                  step="0.1"
                  required
                />
              </div>


              <div className="form-group">
                <label>Drive Type</label>

                <select
                  name="driveType"
                  value={formData.driveType}
                  onChange={handleChange}
                >
                  <option value="On-Campus">
                    On-Campus
                  </option>

                  <option value="Pool Campus">
                    Pool Campus
                  </option>
                </select>
              </div>


              <div className="form-group">
                <label>Drive Date</label>

                <input
                  type="date"
                  name="driveDate"
                  value={formData.driveDate}
                  onChange={handleChange}
                  required
                />
              </div>

        

              <div className="form-group">
                <label>Last Apply Date</label>

                <input
                  type="date"
                  name="lastApplyDate"
                  value={formData.lastApplyDate}
                  onChange={handleChange}
                  required
                />
              </div>

        

              <div className="form-group">
                <label>Min CGPA</label>

                <input
                  type="number"
                  name="minCgpa"
                  value={formData.minCgpa}
                  onChange={handleChange}
                  step="0.1"
                  required
                />
              </div>

              <div className="form-group">
                <label>Max Backlogs</label>

                <input
                  type="number"
                  name="maxBacklogs"
                  value={formData.maxBacklogs}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="form-group">
                <label>Eligible Branches</label>

                <select
                  name="eligibleBranches"
                  value={formData.eligibleBranches}
                  onChange={handleChange}
                >
                  <option value="CSE">CSE</option>
                  <option value="IT">IT</option>
                  <option value="ECE">ECE</option>
                  <option value="ME">ME</option>
                  <option value="BBA">BBA</option>
                  <option value="All">All</option>
                </select>
              </div>

              <div className="form-group">
                <label>Upload JD (PDF)</label>

                <input
                  type="file"
                  name="jd"
                  accept=".pdf"
                  onChange={handleChange}
                />
              </div>


              <div
                className="form-group"
                style={{
                  gridColumn: "1 / -1",
                }}
              >
                <label>Additional Notes</label>

                <textarea
                  rows="4"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
            </div>


            <div
              style={{
                display: "flex",
                gap: "8px",
                marginTop: "16px",
              }}
            >
              <button
                type="submit"
                className="btn btn-primary"
              >
                {editingId !== null
                  ? "Update Drive"
                  : "Save Drive"}
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={handleClear}
              >
                Clear
              </button>

              <button
                type="button"
                className="btn btn-outline"
                onClick={resetForm}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}


      <div className="card">
        <div className="card-header">
          <div className="card-title">
            All Drives
          </div>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="data-table">

            <thead>
              <tr>
                <th>Company</th>
                <th>Role</th>
                <th>Drive Date</th>
                <th>Eligible</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {drives.map((drive) => (
                <tr key={drive.id}>

                  <td>
                    {drive.companyName}
                  </td>

                  <td>
                    {drive.role}
                  </td>

                  <td>
                    {drive.driveDate}
                  </td>

                  <td>
                    {drive.eligibleBranches}
                  </td>

                  <td>
                    <span
                      className={
                        drive.status === "Active"
                          ? "badge badge-success"
                          : drive.status === "Upcoming"
                          ? "badge badge-warn"
                          : "badge badge-gray"
                      }
                    >
                      {drive.status}
                    </span>
                  </td>

     

                  <td>
                    <button
                      className="btn btn-outline btn-sm"
                      onClick={() =>
                        handleEdit(drive)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-outline btn-sm"
                      style={{
                        marginLeft: "6px",
                      }}
                      onClick={() =>
                        handleDelete(drive.id)
                      }
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
export default ManageDrives;
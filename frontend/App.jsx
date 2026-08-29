import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AdminSidebar from "./components/AdminSidebar";

import StudentDashboard from "./components/StudentDashboard";
import Opportunities from "./components/Opportunities";
import MyApplications from "./components/MyApplications";
import ResumeBuilder from "./components/ResumeBuilder";

import AdminOverview from "./components/AdminOverview";
import ManageDrives from "./components/ManageDrives";
import StudentList from "./components/StudentList";
import ShortlistResults from "./components/ShortlistResults";
import Announcements from "./components/Announcements";

function App() {

  const [panel, setPanel] = useState("student");

  const [studentPage, setStudentPage] =
    useState("dashboard");

  const [adminPage, setAdminPage] =
    useState("overview");


  return (
    <>
      <Header
        panel={panel}
        setPanel={setPanel}
      />


      <div className="layout">

        {panel === "student" && (
          <Sidebar
            activePage={studentPage}
            setActivePage={setStudentPage}
            setPanel={setPanel}
          />
        )}


        {panel === "admin" && (
          <AdminSidebar
            activePage={adminPage}
            setActivePage={setAdminPage}
            setPanel={setPanel}
          />
        )}


        <main className="content">

          {panel === "student" && (
            <>

              {studentPage === "dashboard" && (
                <StudentDashboard />
              )}


              {studentPage === "opportunities" && (
                <Opportunities />
              )}


              {studentPage === "applications" && (
                <MyApplications />
              )}


              {studentPage === "resume" && (
                <ResumeBuilder />
              )}


              {studentPage === "grievance" && (
                <div>

                  <div className="page-title">
                    Grievance
                  </div>

                  <div className="page-sub">
                    Submit and track your grievances
                  </div>


                  <div className="card">

                    <div className="card-header">
                      <div className="card-title">
                        Grievance
                      </div>
                    </div>


                    <div className="form-group">

                      <label>
                        Subject
                      </label>

                      <input
                        type="text"
                        placeholder="Enter grievance subject"
                      />

                    </div>


                    <div
                      className="form-group"
                      style={{
                        marginTop: "12px"
                      }}
                    >

                      <label>
                        Description
                      </label>

                      <textarea
                        rows="5"
                        placeholder="Describe your grievance"
                      ></textarea>

                    </div>


                    <button
                      className="btn btn-primary"
                      style={{
                        marginTop: "12px"
                      }}
                    >
                      Submit Grievance
                    </button>

                  </div>

                </div>
              )}

            </>
          )}


          {panel === "admin" && (
            <>

              {adminPage === "overview" && (
                <AdminOverview />
              )}


              {adminPage === "drives" && (
                <ManageDrives />
              )}


              {adminPage === "students" && (
                <StudentList />
              )}


              {adminPage === "shortlist" && (
                <ShortlistResults />
              )}


              {adminPage === "announcements" && (
                <Announcements />
              )}

            </>
          )}

        </main>

      </div>
    </>
  );
}
export default App;
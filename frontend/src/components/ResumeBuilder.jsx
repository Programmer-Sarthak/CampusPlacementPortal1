function ResumeBuilder() {
  return (
    <div>
      <div className="page-title">
        Resume Builder
      </div>

      <div className="page-sub">
        Build and preview your placement-ready resume
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">
            Resume Templates
          </div>
        </div>

        <div className="templates-grid">

          <div className="template-card">
            <div className="template-preview">
              Classic
            </div>

            <div className="template-name">
              Classic Resume
            </div>

            <button className="btn btn-primary btn-sm">
              Use Template
            </button>
          </div>

          <div className="template-card">
            <div className="template-preview">
              Modern
            </div>

            <div className="template-name">
              Modern Resume
            </div>

            <button className="btn btn-primary btn-sm">
              Use Template
            </button>
          </div>

          <div className="template-card">
            <div className="template-preview">
              Minimal
            </div>

            <div className="template-name">
              Minimal Resume
            </div>

            <button className="btn btn-primary btn-sm">
              Use Template
            </button>
          </div>

        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <div className="card-title">
            Resume Status
          </div>
        </div>

        <div className="info-grid">

          <div className="info-row">
            <div>
              <div className="info-label">
                ATS Score
              </div>

              <div className="info-val">
                78% (atbc)
              </div>
            </div>
          </div>

          <div className="info-row">
            <div>
              <div className="info-label">
                Resume Status
              </div>

              <div className="info-val">
                Ready for review
              </div>
            </div>
          </div>

        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "16px"
          }}
        >
          <button className="btn btn-primary">
            Edit Details
          </button>

          <button className="btn btn-outline">
            Save & Preview
          </button>

          <button className="btn btn-outline">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
export default ResumeBuilder;
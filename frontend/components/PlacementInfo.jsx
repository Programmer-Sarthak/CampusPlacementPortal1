function PlacementInfo() {
  return (
    <div className="card" style={{ marginBottom: "12px" }}>
      <div className="card-header">
        <div className="card-title">Placement Cell Info</div>
      </div>

      <div className="info-grid">

        <div className="info-row">
          <i className="ti ti-mail"></i>
          <div>
            <div className="info-label">Cell Email</div>
            <div className="info-val">
              placement@ipsacademy.org
            </div>
          </div>
        </div>

        <div className="info-row">
          <i className="ti ti-phone"></i>
          <div>
            <div className="info-label">Officer Contact</div>
            <div className="info-val">
              +91 98765 43210
            </div>
          </div>
        </div>

        <div className="info-row">
          <i className="ti ti-download"></i>
          <div>
            <div className="info-label">Resume Template</div>
            <div
              className="info-val"
              style={{
                color: "var(--brand-mid)",
                cursor: "pointer"
              }}
            >
              Download PDF
            </div>
          </div>
        </div>

        <div className="info-row">
          <i className="ti ti-brand-telegram"></i>
          <div>
            <div className="info-label">Telegram Channel</div>
            <div
              className="info-val"
              style={{
                color: "var(--brand-mid)",
                cursor: "pointer"
              }}
            >
              Join Group
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default PlacementInfo;
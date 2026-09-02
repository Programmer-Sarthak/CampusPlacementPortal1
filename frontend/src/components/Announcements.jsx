function Announcements() {
  return (
    <div>
      <div className="page-title">
        Send Announcement
      </div>

      <div className="page-sub">
        Notify students via Email, WhatsApp, and Telegram simultaneously
      </div>

      <div className="two-col">

        <div className="card">

          <div
            className="card-title"
            style={{ marginBottom: "12px" }}
          >
            Compose
          </div>

          <div className="form-grid">

            <div
              className="form-group form-full"
            >
              <label>Title</label>

              <input
                placeholder="e.g. Infosys Drive Registration Open"
              />
            </div>

            <div className="form-group">
              <label>Target Audience</label>

              <select>
                <option>All Students</option>
                <option>CSE Only</option>
                <option>Shortlisted Students</option>
                <option>Specific Drive</option>
              </select>
            </div>

            <div className="form-group">
              <label>Related Drive</label>

              <select>
                <option>TCS – May 2026</option>   (api to be call) 
                <option>Infosys – May 2026</option>   (api to be call) 
                <option>General</option>   (api to be call) 
              </select>
            </div>

            <div
              className="form-group form-full"
      >
              <label>Message</label>

              <textarea
                rows="4"
                placeholder="Type your announcement here..."
              ></textarea>
            </div>

          </div>

          <div className="divider"></div>

          <div
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "var(--muted)",
              marginBottom: "8px",
              textTransform: "uppercase",
              letterSpacing: ".5px"
            }}
     >
            Send via
          </div>


          <div
            style={{
              display: "flex",
              gap: "16px",
              marginBottom: "14px"
            }}
   >

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                cursor: "pointer"
              }}
     >
              <input
                type="checkbox"
                defaultChecked
              />
              <i className="ti ti-mail"></i>
              Email
            </label>


            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                cursor: "pointer"
              }}
      >
              <input
                type="checkbox"
                defaultChecked
              />
              <i className="ti ti-brand-whatsapp"></i>
              WhatsApp
            </label>


            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                cursor: "pointer"
              }}
      >
              <input
                type="checkbox"
                defaultChecked
              />
              <i className="ti ti-brand-telegram"></i>
              Telegram
            </label>

          </div>

          <button className="btn btn-primary">
            <i className="ti ti-send"></i>
            Send Announcement
          </button>

        </div>

        <div className="card">

          <div
            className="card-title"
            style={{ marginBottom: "12px" }}
        >
            Recent Announcements
          </div>


          <div className="notif-list">

            <div className="notif-item">

              <i className="ti ti-bell"></i>

              <div>
                <div
                  className="notif-text"
                  style={{ fontWeight: 500 }}
        >
                  TCS Shortlist Released  (api to be call) 
                </div>

                <div className="notif-text">
                  Shortlisted candidates check email for slot timing.
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "4px",
                    marginTop: "4px"
                  }}
                >
                  <span
                    className="badge badge-info"
                    style={{ fontSize: "10px" }}
                  >
                    Email
                  </span>

                  <span
                    className="badge badge-success"
                    style={{ fontSize: "10px" }}
           >
                    WhatsApp
                  </span>

                  <span
                    className="badge badge-info"
                    style={{ fontSize: "10px" }}
           >
                    Telegram
                  </span>
                </div>

                <div className="notif-time">
                  Today, 10:30 AM · 842 recipients  (api to be call) 
                </div>
              </div>

            </div>

            <div
              className="notif-item"
              style={{
                borderColor: "var(--accent)",
                background: "var(--accent-light)"
              }}
>
              <i
                className="ti ti-speakerphone"
                style={{ color: "var(--accent)" }}
              ></i>

              <div>

                <div
                  className="notif-text"
                  style={{ fontWeight: 500 }}
                       >
                  Infosys Mock GD — Register Now  (api to be call) 
                </div>

                <div className="notif-text">
                  Mock GD on 28 May. Register by tonight.  (api to be call) 
                </div>

                <div className="notif-time">
                  Yesterday · 620 recipients
                </div>

              </div>

            </div>


            <div
              className="notif-item"
              style={{
                borderColor: "var(--success)",
                background: "var(--success-light)"
              }}
   >

              <i
                className="ti ti-calendar-event"
                style={{ color: "var(--success)" }}
              ></i>

              <div>

                <div
                  className="notif-text"
                  style={{ fontWeight: 500 }}
   >
                  Wipro Pool Campus Drive Open
                </div>

                <div className="notif-text">
                  Apply before 30 May on the portal.
                </div>

                <div className="notif-time">
                  22 May · All branches
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
export default Announcements;
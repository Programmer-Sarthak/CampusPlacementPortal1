function RecentNotifications() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          Recent Notifications
        </div>
      </div>

      <div className="notif-list">

        <div className="notif">
          <div className="notif-dot"></div>

          <div>
            <div className="notif-title">
              TCS — Technical Interview
            </div>

            <div className="notif-time">
              Tomorrow · 9:00 AM
            </div>
          </div>
        </div>

        <div className="notif">
          <div className="notif-dot"></div>

          <div>
            <div className="notif-title">
              Infosys — Mock GD Round
            </div>

            <div className="notif-time">
              28 May · 11:00 AM
            </div>
          </div>
        </div>

        <div className="notif">
          <div className="notif-dot"></div>

          <div>
            <div className="notif-title">
              Wipro — Pool Campus Drive
            </div>

            <div className="notif-time">
              02 Jun · 9:30 AM
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default RecentNotifications;
function UpcomingCalendar() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          Upcoming Drive Calendar
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px"
        }}
      >

        <div
          className="cal-event"
          style={{ borderLeft: "3px solid var(--brand-mid)" }}
        >
          <div className="cal-date">
            <div
              className="cal-day"
              style={{ color: "var(--brand-mid)" }}
            >
              26
            </div>
            <div className="cal-month">MAY</div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "13px", fontWeight: 500 }}>
              TCS — Technical Interview
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "var(--muted)"
              }}
            >
              9:00 AM · Auditorium A
            </div>
          </div>

          <span className="badge badge-info">
            You
          </span>
        </div>

        <div
          className="cal-event"
          style={{ borderLeft: "3px solid var(--accent)" }}
        >
          <div className="cal-date">
            <div
              className="cal-day"
              style={{ color: "var(--accent)" }}
            >
              28
            </div>
            <div className="cal-month">MAY</div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "13px", fontWeight: 500 }}>
              Infosys — Mock GD Round
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "var(--muted)"
              }}
            >
              11:00 AM · Seminar Hall
            </div>
          </div>

          <span className="badge badge-warn">
            Register
          </span>
        </div>


        <div
          className="cal-event"
          style={{ borderLeft: "3px solid var(--success)" }}
        >
          <div className="cal-date">
            <div
              className="cal-day"
              style={{ color: "var(--success)" }}
            >
              02
            </div>
            <div className="cal-month">JUN</div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "13px", fontWeight: 500 }}>
              Wipro — Pool Campus Drive
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "var(--muted)"
              }}
            >
              9:30 AM · IPS Campus
            </div>
          </div>

          <span className="badge badge-success">
            Open
          </span>
        </div>


        <div
          className="cal-event"
          style={{ borderLeft: "3px solid var(--muted)" }}
        >
          <div className="cal-date">
            <div
              className="cal-day"
              style={{ color: "var(--muted)" }}
            >
              10
            </div>
            <div className="cal-month">JUN</div>
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "13px", fontWeight: 500 }}>
              Cognizant — On-Campus
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "var(--muted)"
              }}
            >
              10:00 AM · Admin Block
            </div>
          </div>

          <span className="badge badge-gray">
            Soon
          </span>
        </div>

      </div>
    </div>
  );
}
export default UpcomingCalendar;
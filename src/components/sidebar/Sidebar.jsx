import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo"> AdminPanel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
          <li>
            <span>Dashboard</span>
          </li>
        </ul>
      </div>
      <div className="bottom">Colot options</div>
    </div>
  );
}

export default function Navbar(props) {

  const toNextLevelPercent = props.toNextLevelPercent

  const userStateFontSize = props.userState === "Offline" ? "" : 12 
  return (
    <nav>
        <img className="navbar--logo" src="images/Apex-Legends-logo.svg" alt="Apex Legends logo" />
        <h1 className="navbar--title light-text">Apex Legends</h1>
        <div className="navbar--user-status light-text">
            <h2 className="navbar--username">{props.userName}</h2>
            <p className="small-text">Lvl {props.userLevel}</p>
            <div className="navbar--progress-level-container">
              <div className="navbar--progress-level-bar" style={{width: `${toNextLevelPercent}%`}}></div>
            </div>
        </div>
        <div className="navbar--profile-status">
          <img className="navbar--profile-photo" src="images/default-pp.png" alt="Profile Photo"/>
          <p className="small-text light-text" style={{fontSize: userStateFontSize}}>{props.userState}</p>
        </div>
    </nav>
  )
}
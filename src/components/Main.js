export default function Main(props) {
    return (
      <main className="main-info flex-y-center">
          <div className="main--last-legend-status">
            <img className="main--last-legend-img" src={props.lastLegendUsedImage} alt={`${props.lastLegendUsedName} Image`} />
            <div className="main--last-legend-name-box flex-center">
                <h3 className="main--last-legend-name light-text">{props.lastLegendUsedName}</h3>
            </div>
          </div>
          <div className="flex-column-start">
            <div className="main--rank-info flex-center">
              <h2 className="main--rank-text">BR Rank</h2>
              <div className="flex-column-center">
                <img className="main--rank-img" src={props.brRankImg} alt="Battle Royal Rank" />
                <h4 className="main--rank-score">{props.brRankScore} RP</h4>
              </div>
            </div>
            <div className="main--rank-info flex-center">
              <h2 className="main--rank-text">Arena Rank</h2>
              <div className="flex-column-center">
                <img className="main--rank-img" src={props.arenaRankImg} alt="Arena Rank" />
                <h4 className="main--rank-score">{props.arenaRankScore} AP</h4>
              </div>
            </div>
          </div>
      </main>
    )
  }
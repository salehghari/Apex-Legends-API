import { useState, useEffect} from "react"

import Navbar from "./components/Navbar";
import Main from "./components/Main";

// API Key : 0c92db5e1262431def7135345356528e
export default function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem("formData")) || {
    username: "Daltons2000",
    platform: "PC"
  });
  const trueFormData = formData.username && formData.platform ? true : false

  function separator(number) {
    var str = number.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData))
  }, [formData])

  function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    setLoading(true);
    fetch(`https://api.mozambiquehe.re/bridge?auth=0c92db5e1262431def7135345356528e&player=${formData.username}&platform=${formData.platform}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
      console.log(actualData)
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
  }
  useEffect(() => {
    fetch(`https://api.mozambiquehe.re/bridge?auth=0c92db5e1262431def7135345356528e&player=${formData.username}&platform=${formData.platform}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
      setError(null);
      console.log(actualData)
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    });
   }, []);
   
  return (
    <div className="App">
      <div style={{display: error ? "none" : "" }}>
        {loading && 
          <div className="overlay flex-center">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        }
      </div>
      {error && (
        <div className="flex-x-center">
          <div className="error-text">{`There is a problem fetching the post data - ${error}. Refresh the browser again to continue`}</div>
        </div>
      )}
      {data && <Navbar userName={data.global.name} userLevel={data.global.level} toNextLevelPercent={data.global.toNextLevelPercent} userState={data.realtime.currentStateAsText}/>}
      {!trueFormData && 
        <div className="flex-x-center">
          <div className="error-text">Please complete the inputs</div>
        </div>}
      {data && <Main lastLegendUsedImage={data.legends.selected.ImgAssets.icon} lastLegendUsedName={data.legends.selected.LegendName} brRankImg={data.global.rank.rankImg} arenaRankImg={data.global.arena.rankImg} brRankScore={separator(data.global.rank.rankScore)} arenaRankScore={separator(data.global.arena.rankScore)}/>}
      <div className="forms">
        <form className="form" onSubmit={handleSubmit}>
          <input className="form-input" type="text" placeholder="Username" onChange={handleChange} name="username" value={formData.username} />
          <select className="select-form" id="platform" value={formData.platform} onChange={handleChange} name="platform">
                <option value="">-- Choose --</option>
                <option value="PC">PC</option>
                <option value="PS4">PlayStation</option>
                <option value="X1">Xbox</option>
                <option value="SWITCH">Nintendo Switch</option>
          </select>
          <button className="form-submit">
            <h3 className="light-text">Submit</h3>
          </button>
        </form>
      </div>
    </div>
  )
}
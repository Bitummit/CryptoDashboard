import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import ethImage from '../../assets/eth.png'
import btcImage from '../../assets/btc.png'
import ltcImage from '../../assets/ltc.png'
import solImage from '../../assets/sol.png'

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="content">
          <div className="pageHeader">Dashboard</div>
          <div className="widgets">
            <Widget name="ETH" price="3,558.56" image={ethImage} percent={0.07} isUp={false}/>
            <Widget name="BTC" price="72,000.23" image={btcImage} percent={2} isUp={true}/>
            <Widget name="LTC" price="83.91" image={ltcImage} percent={10} isUp={false}/>
            <Widget name="SOL" price="210.80" image={solImage} percent={12} isUp={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}

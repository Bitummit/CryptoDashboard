import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ethImage from "../../assets/eth.png";
import btcImage from "../../assets/btc.png";
import ltcImage from "../../assets/ltc.png";
import solImage from "../../assets/sol.png";
import List from "../../components/table/Table";
import { Trans, useTranslation } from "react-i18next";

export default function Home() {
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="pageContent">
          <div className="pageHeader">
            {/* <Trans i18nKey="home.title">
              Dashboard
            </Trans> */}
            {t("home.title")}
          </div>

          <div className="flex flex-wrap justify-content gap-10 m-8">
            <Widget
              name="ETH"
              price="3,558.56"
              image={ethImage}
              percent={0.07}
              isUp={false}
            />
            <Widget
              name="BTC"
              price="72,000.23"
              image={btcImage}
              percent={2}
              isUp={true}
            />
            <Widget
              name="LTC"
              price="83.91"
              image={ltcImage}
              percent={10}
              isUp={false}
            />
            <Widget
              name="SOL"
              price="210.80"
              image={solImage}
              percent={12}
              isUp={true}
            />
          </div>

          <div className="charts">
            <Featured />
            <Chart />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest transactions</div>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import ethImage from "../../assets/eth.png";
import btcImage from "../../assets/btc.png";
import ltcImage from "../../assets/ltc.png";
import solImage from "../../assets/sol.png";
import List from "../../components/table/Table";
import { useTranslation } from "react-i18next";
import useWindowDimensions from "../../services/useWindowDimensions";
import { Suspense } from "react";
import FeaturedLoading from "../../components/loading/FeaturedLoading";
import ChartLoading from "../../components/loading/ChartLoading";
import SideButtons from "../../components/sideButtons/SideButtons";
import React from "react";

const Featured = React.lazy(() => import("../../components/featured/Featured"));
const Chart = React.lazy(() => import("../../components/chart/Chart"));

export default function Home() {
  const { height, width } = useWindowDimensions();
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-colorBgPrimary md:px-20">
      <div>
        {/* <Navbar /> */}
        <SideButtons />
        <div className="pageContent">
          <div>
            <h1 className="pt-10 pl-10 text-4xl text-colorTextGraySecond font-bold">
              {t("home.title")}
            </h1>
            {/* <Trans i18nKey="home.title">
              Dashboard
            </Trans> */}
          </div>

          <div className="flex flex-wrap justify-content gap-20 m-8">
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

          <div className="flex flex-wrap justify-content gap-8 m-8">
            <Suspense fallback={<FeaturedLoading />}>
              <Featured />
            </Suspense>
            <Suspense fallback={<ChartLoading />}>
              <Chart />
            </Suspense>
          </div>
          <div className="bg-colorBgSecondary rounded-lg custom-shadow m-8 p-2 min-w-52 ">
            <h5 className="text-xl font-bold leading-none text-colorTextGraySecond pe-1 m-3 p-4">
              Latest transactions
            </h5>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

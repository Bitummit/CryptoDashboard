import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ReactApexChart from "react-apexcharts";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeModeContext.jsx";
import { ResponsivePie } from '@nivo/pie'


export default function Featured() {

  const data = [
    {
      "id": "ETH",
      "label": "ETH",
      "value": 1023.2,
      "color": "hsl(262, 70%, 50%)"
    },
    {
      "id": "BTC",
      "label": "BTC",
      "value": 23042.12,
      "color": "hsl(132, 70%, 50%)"
    },
    {
      "id": "LTC",
      "label": "LTC",
      "value": 3821.61,
      "color": "hsl(332, 70%, 50%)"
    },
    {
      "id": "SOL",
      "label": "SOL",
      "value": 12412.01,
      "color": "hsl(183, 70%, 50%)"
    }
  ]



  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Wallet Statistic</h1>
        <MoreVertIcon className="icon" fontSize="medium" />
      </div>
      <div className="bottom" style={{height: '80%'}}>
        <div className="featuredChart" style={{height: '90%', width:'99%'}}>
        <ResponsivePie
        data={data}
        margin={{ top: 30, right: 0, bottom: 80, left: 0 }}
        valueFormat=" >-$~"
        startAngle={32}
        innerRadius={0.5}
        padAngle={3}
        cornerRadius={9}
        activeOuterRadiusOffset={9}
        colors={{ scheme: 'purples' }}
        borderWidth={4}
        borderColor="black"
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsOffset={-9}
        arcLinkLabelsDiagonalLength={20}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        arcLabelsSkipAngle={12}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '2.2'
                ]
            ]
        }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 50,
                itemsSpacing: 4,
                itemWidth: 53,
                itemHeight: 14,
                itemTextColor: '#999',
                itemDirection: 'right-to-left',
                itemOpacity: 1,
                symbolSize: 15,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
        ]}
    />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import {VictoryPie} from 'victory-native';
import {h} from './DimensionWindow';

const ChartPie = () => {
  return (
    <VictoryPie
      height={h * 0.46}
      width={h * 0.46}
      innerRadius={h * 0.085}
      data={[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
      labels={[]}
      colorScale={[
        '#2e8b57',
        '#dc143c',
        '#b22222',
        '#87cefa',
        '#daa520',
        '#6a5acd',
        '#d8bfd8',
        '#6495ed',
        '#b8860b',
        '#e9967a',
        '#b0c4de',
        '#da70d6',
      ]}
    />
  );
};

export default ChartPie;

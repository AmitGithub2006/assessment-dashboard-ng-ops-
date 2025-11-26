'use client';

import React from 'react';
import { Chart } from 'react-google-charts';

const StackedColumnChart = ({ 
  data, 
  title = "Column Chart", 
  width = "100%", 
  height = "500px",
  colors = ['#60A5FA', '#93C5FD', '#FCA5A5', '#FCD34D', '#FB923C', '#A78BFA', '#34D399', '#FBBF24', '#F87171', '#818CF8', '#10B981'],
  hAxisTitle = "",
  vAxisTitle = "",
  showDropdown = false,
  dropdownLabel = "",
  showLegendLabels = {}
}) => {
  // Transform data to show full legend labels
  const transformedData = data.map((row, index) => {
    if (index === 0 && Object.keys(showLegendLabels).length > 0) {
      return row.map((col) => showLegendLabels[col] || col);
    }
    return row;
  });

  const options = {
    title: title,
    titleTextStyle: {
      fontSize: 18,
      bold: true,
      color: '#1F2937',
      fontName: 'Poppins'
    },
    chartArea: { 
      width: '80%',
      height: '60%',
      top: 100
    },
    isStacked: true,
    colors: colors,
    hAxis: {
      title: hAxisTitle,
      textStyle: {
        fontName: 'Poppins',
        fontSize: 11
      },
      titleTextStyle: {
        fontName: 'Poppins',
        fontSize: 13,
        bold: true,
        italic: true
      },
      slantedText: true,
      slantedTextAngle: 45
    },
    vAxis: {
      title: vAxisTitle,
      minValue: 0,
      textStyle: {
        fontName: 'Poppins',
        fontSize: 12
      },
      titleTextStyle: {
        fontName: 'Poppins',
        fontSize: 13,
        bold: true,
        italic: true
      }
    },
    legend: {
      position: 'right',
      alignment: 'start',
      textStyle: {
        fontName: 'Poppins',
        fontSize: 11
      }
    },
    backgroundColor: 'transparent',
    bar: { groupWidth: '70%' }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {showDropdown && (
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">{dropdownLabel}</label>
            <select className="border border-gray-300 rounded px-3 py-1 text-sm">
              <option>All</option>
            </select>
          </div>
        )}
      </div>
      <Chart
        chartType="ColumnChart"
        data={transformedData}
        options={options}
        width={width}
        height={height}
      />
    </div>
  );
};

export default StackedColumnChart;

import React, { useState, useRef } from 'react';
import { View, StyleSheet, PanResponder } from 'react-native';
import Svg, { Path, Text as SvgText, Circle } from 'react-native-svg'; 
import * as d3 from 'd3-shape';
import * as d3Scale from 'd3-scale';
import { data } from '../utils/ChartData'; 



const LineChart = ({ width, height }) => {
  const { values, labels } = data;
  const padding = 15;
  const labelWidth = 14;
  const maxLabels = Math.floor(width / labelWidth);
  const labelSpacing = Math.max(1, Math.floor(labels.length / maxLabels));

  // Set up x and y scales
  const xScale = d3Scale.scaleLinear()
    .domain([0, values.length - 1])
    .range([padding, width - padding]);

  const yScale = d3Scale.scaleLinear()
    .domain([Math.min(...values), Math.max(...values)])
    .range([height - padding, padding]);

  const lineGenerator = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d))
    .curve(d3.curveBasis); 

  const pathData = lineGenerator(values);

  // State for cursor interaction
  const [cursorX, setCursorX] = useState(null);
  const [cursorIndex, setCursorIndex] = useState(null);

  // PanResponder to handle touch gestures
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const x = gestureState.moveX;
        const chartX = x - padding;
        if (chartX >= 0 && chartX <= width - 2 * padding) {
          const index = Math.round(xScale.invert(chartX));
          setCursorX(xScale(index));
          setCursorIndex(index);
        }
      },
      onPanResponderRelease: () => {
      }
    })
  ).current;

  return (
    <View style={styles.container} {...panResponder.panHandlers}>
      <Svg width={width} height={height + 40}>
        <Path d={pathData} stroke="green" strokeWidth={4} fill="none" />

        {/* X-axis Labels */}
        {labels.length > 0 && labels.map((label, i) => (
          i % labelSpacing === 0 && (
            <SvgText
              key={i}
              x={xScale(i) + 40}
              y={height + 10} 
              fontSize={14} 
              fill="black" 
              textAnchor="middle"
              fontWeight="normal" 
              fontFamily="Arial"
            >
              {label}
            </SvgText>
          )
        ))}

        {/* Cursor Circle */}
        {cursorX !== null && (
          <Circle
            cx={cursorX}
            cy={yScale(values[cursorIndex])}
            r={7} 
            fill="green" 
          />
        )}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default LineChart;

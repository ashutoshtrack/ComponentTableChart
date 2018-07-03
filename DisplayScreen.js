import React, { Component } from "react";
import { View, ScrollView, YellowBox } from "react-native";
import Svg, { Circle, G, Rect, Text, Path } from "react-native-svg";
import {
  StackedAreaChart,
  BarChart,
  LineChart,
  Grid,
  AreaChart,
  XAxis,
  YAxis
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import * as scale from "d3-scale";
YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

class DisplayScreen extends Component {
  render() {
    const datas = this.props.chartData;
    return (
      <View>
        <View style={{ flexDirection: "row" }}>
          <YAxis
            data={datas}
            yAccessor={({ item }) => item.value}
            formatLabel={(_, index) => index}
            style={{ marginBottom: 5, margin: 5 }}
            contentInset={{ top: 30, bottom: 30 }}
            svg={{ fontSize: 10, fill: "grey" }}
          />
          <ScrollView horizontal={true}>
            <View style={{ flex: 1, width: 400 }}>
              <AreaChart
                style={{ height: 200, width: "100%" }}
                data={datas}
                yAccessor={({ item }) => item.value}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: "rgba(134, 65, 244, 0.5)" }}
              >
                <Grid />
              </AreaChart>
              <XAxis
                data={datas}
                yAccessor={({ index }) => index}
                scale={scale.scaleBand}
                contentInset={{ top: 10, bottom: 10 }}
                style={{ margin: 7 }}
                spacing={0.2}
                formatLabel={(_, index) => datas[index].label}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default DisplayScreen;

import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView
} from "react-native";
import {
  Table,
  TableWrapper,
  Row,
  Cell,
  Col
} from "react-native-table-component";
import TableComponent from "./TableComponent";
import DisplayScreen from "./DisplayScreen";
import SingleChartScreen from "./SingleChartScreen";

const MayData = [
  50,
  13,
  56,
  44,
  10,
  91,
  15,
  30,
  24,
  5, //10
  7,
  13,
  23,
  36,
  24,
  46,
  15,
  35,
  65,
  74, //20
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  56
];

const JuneData = [
  74, //20
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  50,
  13,
  56,
  44,
  10,
  91,
  15,
  30,
  24,
  5, //10
  7,
  13,
  23,
  36,
  24,
  46,
  15,
  35,
  65
];

const JulyData = [
  5,
  85,
  3,
  54,
  56,
  45,
  36,
  15,
  25,
  14,
  78,
  65,
  95,
  78,
  63,
  25,
  45,
  36,
  25,
  21,
  23,
  85,
  20,
  46,
  32,
  12,
  11,
  23,
  12,
  8, //30
  56
];
datas = [
  {
    value: MayData.reduce((a, b) => a + b) / MayData.length,
    label: "May",
    monthdata: MayData
  },
  {
    value: JuneData.reduce((a, b) => a + b) / JuneData.length,
    label: "June",
    monthdata: JuneData
  },
  {
    value: JulyData.reduce((a, b) => a + b) / JulyData.length,
    label: "July",
    monthdata: JulyData
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ["Head", "Head2", "Head3", "Head4", "Head5"],
      tableData: [
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"],
        ["1", "2", "3", "4", "5"],
        ["a", "b", "c", "d", "e"]
      ]
    };
  }

  render() {
    const state = this.state;
    //     <TableComponent header={state.tableHead} tableData={state.tableData} />

    console.log(JuneData);
    return (
      <ScrollView style={styles.container}>
        <Text> Hello</Text>

        <TableComponent header={state.tableHead} tableData={state.tableData} />
        <DisplayScreen chartData={datas} />
        <SingleChartScreen monthdata={JuneData} thirtycheck={true} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" }
});

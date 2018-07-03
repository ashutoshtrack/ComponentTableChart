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

const TableComponent = props => {
  return (
    <View>
      <Table borderStyle={{ borderColor: "white" }}>
        <Row data={props.header} style={styles.head} textStyle={styles.text} />
        <ScrollView>
          <View>
            {props.tableData.map((rowData, index) => (
              <TableWrapper
                key={index}
                style={styles.row}
                borderStyle={{ borderColor: "white" }}
              >
                {rowData.map((cellData, cellIndex) => {
                  console.log(cellIndex);

                  return (
                    <Cell
                      key={cellIndex}
                      data={cellData}
                      textStyle={styles.text}
                    />
                  );
                })}
              </TableWrapper>
            ))}
          </View>
        </ScrollView>
      </Table>
    </View>
  );
};

export default TableComponent;
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#808B97" },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" }
});

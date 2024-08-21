import React from "react";
import { useTable } from "react-table";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import "./CustomTable.css";

const { RangePicker } = DatePicker;

const CustomTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Site Name",
        accessor: "siteName",
      },
      {
        Header: "Region",
        accessor: "region",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Beginning",
        accessor: "beginning",
      },
      {
        Header: "Elapsed Time",
        accessor: "elapsedTime",
      },
    ],
    []
  );

  // Define the dummy data for the table
  const data = React.useMemo(
    () => [
      {
        siteName: "ES2-GWD-07055",
        region: "Enfrashare",
        status: "Bus Voltage Low",
        beginning: "20-Aug-2024 23:57",
        elapsedTime: "0-10-28 hrs",
      },
      {
        siteName: "ES2-KAD-05611",
        region: "Enfrashare",
        status: "Main Fail - Grid Outage",
        beginning: "20-Aug-2024 23:57",
        elapsedTime: "0-10-28 hrs",
      },
      {
        siteName: "EC1-BWN-02371",
        region: "Enfrashare",
        status: "Com Error",
        beginning: "20-Aug-2024 23:57",
        elapsedTime: "0-10-28 hrs",
      },
      {
        siteName: "EN2-KOH-06630",
        region: "Enfrashare",
        status: "Mains Fail",
        beginning: "20-Aug-2024 23:57",
        elapsedTime: "0-10-28 hrs",
      },
      {
        siteName: "ATS-WZ36",
        region: "Tawal",
        status: "Main Fail - Grid Outage",
        beginning: "20-Aug-2024 23:57",
        elapsedTime: "0-10-27 hrs",
      },
    ],
    []
  );

  // Use the useTable hook to create the table instance
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div style={{ border: "1px solid #ddd", backgroundColor:'white' }}>
      <div style={{ display: "flex", flexDirection: "row", padding:'20px 20px', alignItems:'center'}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "0px solid",
            alignItems: "flex-start",
            // padding: "10px",
            flexShrink: 0
          }}
        >
          <text style={{ fontSize: 24, fontWeight: "bold", color: "black" }}>
            Site Listing
          </text>
          <text style={{ fontSize: 12, color: "grey" }}>5 Active Site(s)</text>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            width: "100%",
            border: "0px solid",
            height:40,
            paddingRight:20
          }}
        >
          <RangePicker />
        </div>
      </div>

      <table {...getTableProps()} className="custom-table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;

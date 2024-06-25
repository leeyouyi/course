import Table from "../components/Table";
import { useState } from "react";

const tableColumns = [
  {
    title: "專案",
    field: "project",
  },
  {
    title: "人數",
    field: "number",
  },
  {
    title: "開始日期",
    field: "startDate",
  },
  {
    title: "其他",
    field: "detail",
  },
];

const tableData = [
  {
    project: "我的專案",
    number: 1,
    startDate: "2024/6/20",
    detail: "詳細",
  },
  {
    project: "公司專案",
    number: 10,
    startDate: "2024/4/20",
    detail: "詳細",
  },
  {
    project: "其他專案",
    number: 5,
    startDate: "2024/12/10",
    detail: "詳細",
  },
];

const Lesson6 = () => {
  const [rowData, setRowData] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const renderCell = (row, field) => {
    switch (field) {
      case "detail":
        return (
          <button
            onClick={() => {
              setRowData(row);
              setShowDetail(true);
            }}
          >
            {row[field]}
          </button>
        );
      default:
        return row[field];
    }
  };
  return (
    // <table>
    //   <thead>
    //     <tr>
    //       {tableColumns.map((column) => (
    //         <th key={column.field}>{column.title}</th>
    //       ))}
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {tableData.map((data, i) => (
    //       <tr key={"row" + i}>
    //         {Object.keys(data).map((key) => (
    //           <td key={key}>{data[key]}</td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <>
      {!showDetail ? (
        <Table
          columns={tableColumns}
          data={tableData}
          renderCell={renderCell}
        />
      ) : (
        <div>
          {rowData.project} 詳細內容
          <button onClick={() => setShowDetail(false)}>返回</button>
        </div>
      )}
    </>
  );
};

export default Lesson6;

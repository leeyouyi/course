import Table from "../components/Table";
import { useState } from "react";
import viteLogo from "/vite.svg";

const EnumFields = {
  /** 專案名稱 */
  project: "project",
  number: "number",
  startDate: "startDate",
  link: "link",
  detail: "detail",
  img: "img",
};

const tableColumns = [
  {
    title: "專案",
    field: EnumFields.project,
  },
  {
    title: "人數",
    field: EnumFields.number,
  },
  {
    title: "開始日期",
    field: EnumFields.startDate,
  },
  {
    title: "連結",
    field: EnumFields.link,
  },
  {
    title: "詳細",
    field: EnumFields.detail,
  },
  {
    title: "其他",
    field: EnumFields.img,
  },
];

const tableData = [
  {
    project: "我的專案",
    number: 1,
    startDate: "2024/6/20",
    link: "https://www.google.com.tw/",
    detail: "詳細",
    img: viteLogo,
  },
  {
    project: "公司專案",
    number: 10,
    startDate: "2024/4/20",
    link: "https://www.google.com.tw/",
    detail: "詳細",
    img: viteLogo,
  },
  {
    project: "其他專案",
    number: 5,
    startDate: "2024/12/10",
    link: "https://www.google.com.tw/",
    detail: "詳細",
    img: viteLogo,
  },
];

const DetailView = ({ rowData, onBack }) => (
  <div>
    {rowData?.project} 詳細內容
    <button onClick={onBack}>返回</button>
  </div>
);

const Lesson6 = () => {
  const [rowData, setRowData] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const renderCell = (row, field) => {
    switch (field) {
      case EnumFields.link:
        return <a href={row[field]}>{field}</a>;
      case EnumFields.detail:
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

      case EnumFields.img:
        return (
          <div style={{ width: "30px", height: "20px" }}>
            <img
              style={{ width: "100%", height: "100%", padding: "0" }}
              src={row[field]}
              className="logo"
              alt="Vite logo"
            />
          </div>
        );
      default:
        return row[field];
    }
  };
  return (
    <>
      {!showDetail ? (
        <table>
          <thead>
            <tr>
              {tableColumns.map((column) => (
                <th key={column.field}>{column.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, i) => (
              <tr key={"row" + i}>
                {Object.keys(row).map((key) => (
                  <td key={key}>
                    {renderCell ? renderCell(row, key) : row[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <DetailView rowData={rowData} onBack={() => setShowDetail(false)} />
      )}
      <br />
      {!showDetail ? (
        <Table
          columns={tableColumns}
          data={tableData}
          renderCell={renderCell}
        />
      ) : (
        <DetailView rowData={rowData} onBack={() => setShowDetail(false)} />
      )}
    </>
  );
};

export default Lesson6;

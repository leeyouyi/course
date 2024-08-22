import Table from "../components/Table";
import viteLogo from "/vite.svg";

/** 欄位名稱 */
const EnumFields = {
  /** key */
  id: "id",
  /** 專案名稱 */
  project: "project",
  /** 人數 */
  number: "number",
  /** 開始日期 */
  startDate: "startDate",
  /** 連結 */
  link: "link",
  /** 圖片 */
  img: "img",
};

/** thead欄位資料 */
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
    title: "圖片",
    field: EnumFields.img,
  },
];

/** table資料 */
const tableData = [
  {
    id: "0",
    project: "我的專案",
    number: 1,
    startDate: "2024/6/20",
    link: "https://www.google.com.tw/",
    img: viteLogo,
  },
  {
    id: "1",
    project: "公司專案",
    number: 10,
    startDate: "2024/4/20",
    link: "https://www.google.com.tw/",
    img: viteLogo,
  },
  {
    id: "2",
    project: "其他專案",
    number: 5,
    startDate: "2024/12/10",
    link: "https://www.google.com.tw/",
    img: viteLogo,
  },
];

const Lesson6Completed = () => {
  /** 自訂渲染 */
  const renderCell = (row, field) => {
    switch (field) {
      case EnumFields.link:
        return (
          <a href={row[field]} target="_blank">
            {field}
          </a>
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
      {/* <table>
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th key={column.field}>{column.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              {Object.keys(row).map((key) => {
                if (key === "id") return <></>;
                return (
                  <td key={key}>
                    {renderCell ? renderCell(row, key) : row[key]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table> */}

      <Table columns={tableColumns} data={tableData} renderCell={renderCell} />
    </>
  );
};

export default Lesson6Completed;

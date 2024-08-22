import styled from "@emotion/styled";

const StyledTable = styled.table`
  thead {
    tr {
      background-color: #b0b3db;
    }
    th {
      padding: 10px;
    }
  }
  tbody {
    tr {
      background-color: #f9f9f9;
    }
    tr:nth-of-type(even) {
      background-color: #9b919134;
    }

    td {
      padding: 10px;
    }
  }
`;

const Table = (props) => {
  const { columns, data, renderCell } = props;
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field}>{column.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
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
    </StyledTable>
  );
};

export default Table;

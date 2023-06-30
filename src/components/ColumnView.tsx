import React from 'react';

interface Column {
  key: string;
  label: string;
  filter?: boolean;
}

interface DataItem {
  id: number;
  name: string;
  email: string;
  status: boolean;
  [key: string]: any; // Index signature to allow any string key
}

interface ColumnViewProps {
  data: DataItem[];
  columns: Column[];
}

const ColumnView: React.FC<ColumnViewProps> = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>
                {renderCellValue(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const renderCellValue = (item: DataItem, column: Column) => {
  if (column.key === 'email') {
    return item.email ? item.email : 'N/A';
  }
  if (column.key === 'status') {
    return item.status ? 'Enabled' : 'Disabled';
  }
  return item[column.key];
};

export default ColumnView;

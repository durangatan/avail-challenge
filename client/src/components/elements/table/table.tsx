import React from 'react';
import styled from 'styled-components';

const TableTag = styled.table`
  width: 100%;
`;

export default function Table({ rows }: { rows: Array<any> }) {
  const [headerRow, ...rest] = rows;
  return (
    <TableTag>
      <tbody>
        <tr>
          {headerRow.map((headerValue: any) => (
            <th>{headerValue}</th>
          ))}
        </tr>
        {rest.map(row => (
          <tr>
            {row.map((entry: Array<any>) => (
              <td>{entry}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableTag>
  );
}

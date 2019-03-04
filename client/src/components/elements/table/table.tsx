import React, { useState } from 'react';
import styled from 'styled-components';

const TableTag = styled.table`
  overflow: scroll;
`;

const StickyHeader = styled.th`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.color.background};
  button {
    border: none;
    background-color: inherit;
    font-size: inherit;
    color: inherit;
  }
`;

type TableHeaderProps = {
  label: string;
  value: string;
};

type SortMap = {
  [key: string]: (a: any, b: any) => number;
};

type TableProps = {
  headerRow: Array<TableHeaderProps>;
  bodyRows: Array<any>;
  sortBy?: SortBy;
  rowTransformer: (item: any) => any[];
  sortMap: SortMap;
};

type SortDirection = boolean;
const SORT_DIRECTIONS: { [key: string]: SortDirection } = {
  ASCENDING: true,
  DESCENDING: false
};

type SortBy = {
  key: string;
  direction: SortDirection;
};

export default function Table({ headerRow, bodyRows, rowTransformer, sortMap }: TableProps) {
  const [sortBy, setSortBy] = useState<SortBy>({ key: 'name', direction: SORT_DIRECTIONS.DESCENDING });
  const defaultSorter = (a: any, b: any) => {
    return a[sortBy.key]! >= b[sortBy.key]! ? -1 : 1;
  };

  const getSorter = () => {
    if (sortMap[sortBy.key]) {
      return sortMap[sortBy.key];
    }
    return defaultSorter;
  };

  const sortedRows = bodyRows.sort(getSorter());
  if (sortBy.direction === SORT_DIRECTIONS.DESCENDING) {
    sortedRows.reverse();
  }
  const carat = sortBy.direction === SORT_DIRECTIONS.ASCENDING ? '🔺' : '🔻';
  return (
    <TableTag>
      <tbody>
        <tr>
          {headerRow.map((headerValue: TableHeaderProps) => (
            <StickyHeader key={String(headerValue.value)}>
              <button
                onClick={() => {
                  if (sortBy.key === headerValue.value) {
                    return setSortBy({ key: headerValue.value, direction: !sortBy.direction });
                  }
                  setSortBy({ ...sortBy, key: headerValue.value });
                }}
              >
                {`${headerValue.label}${sortBy && sortBy.key === headerValue.value ? carat : ''}`}
              </button>
            </StickyHeader>
          ))}
        </tr>
        {sortedRows.map(rowTransformer).map((row, index) => (
          <tr key={index}>
            {row.map((entry: any) => (
              <td key={String(entry)}>{entry}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableTag>
  );
}

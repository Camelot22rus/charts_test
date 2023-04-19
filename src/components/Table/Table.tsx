import { FC } from "react";
import { Column, ColumnInstance, HeaderGroup, useTable } from "react-table";
import { useNavigate } from "react-router-dom";
import {
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { IData } from "store";

interface ITable {
  columns: Column<IData>[];
  data: IData[];
}

export const Table: FC<ITable> = ({ data, columns }) => {
  const navigate = useNavigate();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const rowClickHandler = (id: string) => {
    navigate(`/cryptocurrencies/${id}`);
  };

  return (
    <MuiTable {...getTableProps()}>
      <TableHead>
        {headerGroups.map((headerGroup) => (
          <TableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(
              (column: HeaderGroup<IData> & { mobileHidden?: boolean }) => (
                <TableCell
                  {...column.getHeaderProps()}
                  {...(column.mobileHidden
                    ? {
                        sx: {
                          display: {
                            xs: "none",
                            md: "table-cell",
                          },
                        },
                      }
                    : {})}
                >
                  {column.render("Header")}
                </TableCell>
              )
            )}
          </TableRow>
        ))}
      </TableHead>
      <TableBody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <TableRow
              {...row.getRowProps()}
              onClick={() => rowClickHandler(row.original.id)}
            >
              {row.cells.map((cell) => {
                console.log(cell);
                return (
                  <TableCell
                    {...cell.getCellProps()}
                    {...((
                      cell.column as ColumnInstance<IData> & {
                        mobileHidden?: boolean;
                      }
                    ).mobileHidden
                      ? {
                          sx: {
                            display: {
                              xs: "none",
                              md: "table-cell",
                            },
                          },
                        }
                      : {})}
                  >
                    {cell.render("Cell")}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </MuiTable>
  );
};

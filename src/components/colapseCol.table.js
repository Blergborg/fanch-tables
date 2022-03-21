import React, { useMemo } from 'react';

import { useTable, usePagination, useRowSelect } from 'react-table';

import { Checkbox } from './checkbox'


const ColapseColTableComponet = () => {
  const columns = useMemo(() => [
    {
      Header: 'Name',
      columns: [
        {
          Header: 'First Name',
          accessor: 'firstName',
        },
        {
          Header: 'Last Name',
          accessor: 'lastName',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Age',
          accessor: 'age',
        },
        {
          Header: 'Visits',
          accessor: 'visits',
        },
        {
          Header: 'Status',
          accessor: 'status',
        },
        {
          Header: 'Profile Progress',
          accessor: 'progress',
        },
      ],
    },
    {
      Header: 'Other',
      columns: [
        {
          Header: 'Section 1',
          accessor: 'section1',
        },
        {
          Header: 'Section 2',
          accessor: 'section2',
        },
        {
          Header: 'Section 3',
          accessor: 'section3',
        },
        {
          Header: 'Section 4',
          accessor: 'section4',
        },
        {
          Header: 'Section 5',
          accessor: 'section5',
        },
        {
          Header: 'Section 6',
          accessor: 'section6',
        },
        {
          Header: 'Section 7',
          accessor: 'section7',
        },
        {
          Header: 'Section 8',
          accessor: 'section8',
        },
        {
          Header: 'Section 9',
          accessor: 'section9',
        },
        {
          Header: 'Section 10',
          accessor: 'section10',
        },
        {
          Header: 'Section 11',
          accessor: 'section11',
        },
        {
          Header: 'Section 12',
          accessor: 'section12',
        },
        {
          Header: 'Section 13',
          accessor: 'section13',
        },
        {
          Header: 'Section 14',
          accessor: 'section14',
        },
      ],
    },
  ], []);


  const data = useMemo(() => [
    {
      "firstName": "horn-od926",
      "lastName": "selection-gsykp",
      "age": 22,
      "visits": 20,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "heart-nff6w",
      "lastName": "information-nyp92",
      "age": 16,
      "visits": 98,
      "progress": 40,
      "status": "complicated",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "minute-yri12",
      "lastName": "fairies-iutct",
      "age": 7,
      "visits": 77,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "degree-jx4h0",
      "lastName": "man-u2y40",
      "age": 27,
      "visits": 54,
      "progress": 92,
      "status": "relationship",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "horn-od926",
      "lastName": "selection-gsykp",
      "age": 22,
      "visits": 20,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "heart-nff6w",
      "lastName": "information-nyp92",
      "age": 16,
      "visits": 98,
      "progress": 40,
      "status": "complicated",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "minute-yri12",
      "lastName": "fairies-iutct",
      "age": 7,
      "visits": 77,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "degree-jx4h0",
      "lastName": "man-u2y40",
      "age": 27,
      "visits": 54,
      "progress": 92,
      "status": "relationship",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    }, {
      "firstName": "horn-od926",
      "lastName": "selection-gsykp",
      "age": 22,
      "visits": 20,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "heart-nff6w",
      "lastName": "information-nyp92",
      "age": 16,
      "visits": 98,
      "progress": 40,
      "status": "complicated",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "minute-yri12",
      "lastName": "fairies-iutct",
      "age": 7,
      "visits": 77,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "degree-jx4h0",
      "lastName": "man-u2y40",
      "age": 27,
      "visits": 54,
      "progress": 92,
      "status": "relationship",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    }, {
      "firstName": "horn-od926",
      "lastName": "selection-gsykp",
      "age": 22,
      "visits": 20,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "heart-nff6w",
      "lastName": "information-nyp92",
      "age": 16,
      "visits": 98,
      "progress": 40,
      "status": "complicated",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "minute-yri12",
      "lastName": "fairies-iutct",
      "age": 7,
      "visits": 77,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "degree-jx4h0",
      "lastName": "man-u2y40",
      "age": 27,
      "visits": 54,
      "progress": 92,
      "status": "relationship",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    }, {
      "firstName": "horn-od926",
      "lastName": "selection-gsykp",
      "age": 22,
      "visits": 20,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "heart-nff6w",
      "lastName": "information-nyp92",
      "age": 16,
      "visits": 98,
      "progress": 40,
      "status": "complicated",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "minute-yri12",
      "lastName": "fairies-iutct",
      "age": 7,
      "visits": 77,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "degree-jx4h0",
      "lastName": "man-u2y40",
      "age": 27,
      "visits": 54,
      "progress": 92,
      "status": "relationship",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    }, {
      "firstName": "horn-od926",
      "lastName": "selection-gsykp",
      "age": 22,
      "visits": 20,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "heart-nff6w",
      "lastName": "information-nyp92",
      "age": 16,
      "visits": 98,
      "progress": 40,
      "status": "complicated",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "minute-yri12",
      "lastName": "fairies-iutct",
      "age": 7,
      "visits": 77,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "degree-jx4h0",
      "lastName": "man-u2y40",
      "age": 27,
      "visits": 54,
      "progress": 92,
      "status": "relationship",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    }, {
      "firstName": "horn-od926",
      "lastName": "selection-gsykp",
      "age": 22,
      "visits": 20,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "heart-nff6w",
      "lastName": "information-nyp92",
      "age": 16,
      "visits": 98,
      "progress": 40,
      "status": "complicated",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "minute-yri12",
      "lastName": "fairies-iutct",
      "age": 7,
      "visits": 77,
      "progress": 39,
      "status": "single",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
    {
      "firstName": "degree-jx4h0",
      "lastName": "man-u2y40",
      "age": 27,
      "visits": 54,
      "progress": 92,
      "status": "relationship",
      "section1": 1,
      "section2": 2,
      "section3": 3,
      "section4": 4,
      "section5": 5,
      "section6": 6,
      "section7": 7,
      "section8": 8,
      "section9": 9,
      "section10": 10,
      "section11": 11,
      "section12": 12,
      "section13": 13,
      "section14": 14,
    },
  ], []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // rows,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, for paging too.
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },

    // Column hiding stuff
    allColumns,
    getToggleHideAllColumnsProps,
  } = useTable({
      columns,
      data,
    },
    usePagination,
    useRowSelect,
     hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <Checkbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <Checkbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  );

 
  return (
    <>
      <div>
        <div>
          <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
        </div>
        {allColumns.map(column => (
          <div key={column.id}>
            <label>
              <input type='checkbox' {...column.getToggleHiddenProps()} />{' '}
              {column.Header}
            </label>
          </div>
        ))}
        <br />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {/* {rows.map(row => { */}
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default ColapseColTableComponet
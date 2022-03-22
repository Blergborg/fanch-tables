import React, { useMemo } from 'react';

import { useTable, usePagination, useRowSelect } from 'react-table';

import { Checkbox } from './checkbox'

// import flattenObject from '../helpers/flattenObj';

// const dummyObj = require("../helpers/dummyData");


const FinalTableComponet = () => {
  
  const columns = useMemo(() => [
    {
      Header: 'Suite Name',
      accessor: 'dummyObj.suiteName'
    },
    {
      Header: 'Repo URL',
      accessor: 'dummyObj.repoUrl'
    },
    {
      Header: 'Repo Branch',
      accessor: 'dummyObj.repoBranch'
    },
    {
      Header: 'Service Name',
      accessor: 'dummyObj.services.0.name'
    },
    {
      Header: 'Simulation Name',
      accessor: 'dummyObj.services.0.simulations.0.name'
    },
    {
      Header: 'Simulation Service',
      accessor: 'dummyObj.services.0.simulations.0.serviceName'
    },
    {
      Header: 'Gatling Version',
      accessor: 'dummyObj.services.0.simulations.0.gatlingVersion'
    },
    {
      Header: 'Load Generator',
      accessor: 'dummyObj.services.0.simulations.0.loadGenerator.label'
    },
    {
      Header: 'Load Generator Type',
      accessor: 'dummyObj.services.0.simulations.0.loadGenerator.type'
    },
    {
      Header: 'Load Generator Beekeeper Protocol',
      accessor: 'dummyObj.services.0.simulations.0.loadGenerator.beekeeperProtocol'
    },
    {
      Header: 'Load Generator Beekeeper URL',
      accessor: 'dummyObj.services.0.simulations.0.loadGenerator.beekeeperUrl'
    },
    {
      Header: 'Load Generator Bee Protocol',
      accessor: 'dummyObj.services.0.simulations.0.loadGenerator.beeProtocol'
    },
    {
      Header: 'Load Generator Bee Port',
      accessor: 'dummyObj.services.0.simulations.0.loadGenerator.beePort'
    },
    {
      Header: 'No. Bees',
      accessor: 'dummyObj.services.0.simulations.0.numberOfBees'
    },
    {
      Header: 'Disable Caching',
      accessor: 'dummyObj.services.0.simulations.0.disableCaching'
    },
    {
      Header: 'Simulation Scenario',
      accessor: 'dummyObj.services.0.simulations.0.simulationsDefinitions.0.scenario'
    },
    {
      Header: 'Simulation Load Injector Name',
      accessor: 'dummyObj.services.0.simulations.0.simulationsDefinitions.0.loadInjector.name'
    },
    {
      Header: 'Simulation Load Injector Variables',
      accessor: 'dummyObj.services.0.simulations.0.simulationsDefinitions.0.loadInjector.injectorVariables'
    },
    {
      Header: 'Simulation Load Injector Steps',
      accessor: 'dummyObj.services.0.simulations.0.simulationsDefinitions.0.loadInjector.injectorSteps'
    },
    {
      Header: 'Data',
      accessor: 'dummyObj.services.data'
    },
    {
      Header: 'PLT Config Test To Run',
      accessor: 'dummyObj.services.pltConfig.TestToRun'
    },
    {
      Header: 'PLT Config Package',
      accessor: 'dummyObj.services.pltConfig.Package'
    },
    {
      Header: 'PLT Config Test Configs',
      accessor: 'dummyObj.services.pltConfig.TestConfigs'
    },
    {
      Header: 'PLT Config Location',
      accessor: 'dummyObj.services.pltConfigLocation'
    },
  ], []);

  const data = useMemo(() => [
    // flattenObject(dummyObj)
    // ** Data Here **
  ], [])

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
       <pre>
          <code>
            {JSON.stringify(
              {
                selectedRowIds: selectedRowIds,
                'selectedFlatRows[].original': selectedFlatRows.map(
                  d => d.original
                ),
              },
              null,
              2
            )}
          </code>
        </pre>
    </>
  )
}

export default FinalTableComponet

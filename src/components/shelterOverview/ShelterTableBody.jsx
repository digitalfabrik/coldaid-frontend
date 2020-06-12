import React, { useState } from 'react'
import {
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core'

import ShelterTableRow from './ShelterTableRow'
import { getComparator, stableSort } from './utils'

const ShelterTableBody = props => {
  const {
    rowsPerPage,
    page,
    shelters,
    order,
    orderBy
  } = props

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, shelters.length - page * rowsPerPage);

  return (
    <TableBody>
    {stableSort(shelters, getComparator(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((shelter, shelterIdx) => {
        return (
          <ShelterTableRow key={`shelter-row-${shelterIdx}`} shelter={shelter} shelterIdx={shelterIdx} />
        )
      })}
    {emptyRows > 0 && (
      <TableRow style={{ height: (53) * emptyRows }}>
        <TableCell colSpan={6} />
      </TableRow>
    )}
  </TableBody>
  )
}

export default ShelterTableBody

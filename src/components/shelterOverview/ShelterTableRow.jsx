import React, { useState } from 'react'
import {
  TableRow,
  TableCell,
  Hidden,
  IconButton,
  Collapse
} from '@material-ui/core'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import DetailInformation from './DetailInformation'

import { cutoffSecondsFromTime } from './utils'

const ShelterTableRow = ({ shelter, shelterIdx }) => {
  const [open, setOpen] = useState(false)

  const labelId = `enhanced-table-checkbox-${shelterIdx}`;

  const availableBedsTotal = shelter.beds.reduce(
    (acc, shelter) => acc + shelter.num_free_beds,
    0
  )
  const intakeHoursFrom = cutoffSecondsFromTime(shelter.intake_hours.from)
  const intakeHoursTo = cutoffSecondsFromTime(shelter.intake_hours.to)
  const intakeHours = `${intakeHoursFrom} - ${intakeHoursTo}`

  return (
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={shelter.name}
      >
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>

        <TableCell id={labelId} scope="shelter">
          {shelter.name}
        </TableCell>

        <Hidden smDown>
          <TableCell>
            {`${shelter.address.street}, ${shelter.address.plz} ${shelter.address.city}`}
          </TableCell>
        </Hidden>

        <Hidden xsDown>
          <TableCell align="right">{availableBedsTotal}</TableCell>
        </Hidden>

        <Hidden smDown>
          <TableCell align="right">{intakeHours}</TableCell>
        </Hidden>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <DetailInformation shelter={shelter}/>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default ShelterTableRow

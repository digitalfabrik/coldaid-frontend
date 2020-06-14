import React from 'react'
import { useTranslation } from 'react-i18next'
import {
  TableHead,
  TableRow,
  TableCell,
  Hidden,
  TableSortLabel
} from '@material-ui/core'
import PropTypes from 'prop-types'

function ShelterTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const { t } = useTranslation()
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property)
  }

  const headCells = [
    { id: 'name', alignRight: false, disablePadding: false, label: t('overview.table.head.name'), sortable: true },
    { id: 'address', alignRight: false, disablePadding: false, label: t('overview.table.head.address'), hiddenSmDown: true },
    { id: 'availableBeds', alignRight: true, disablePadding: false, label: t('overview.table.head.availableBedsTotal'), hiddenXsDown: true },
    { id: 'intakeHours', alignRight: true, disablePadding: false, label: t('overview.table.head.intakeHours'), hiddenSmDown: true },
  ]

  return (
    <TableHead>
      <TableRow>
        <TableCell/>
        {headCells.map((headCell) => {
          return(
            <Hidden key={headCell.id} smDown={headCell.hiddenSmDown} xsDown={headCell.hiddenXsDown}>
              <TableCell
                key={headCell.id}
                align={headCell.alignRight ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'default'}
                sortDirection={orderBy === headCell.id ? order : false}
                >
                { headCell.sortable ?
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <span className={classes.visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </span>
                    ) : null}
                  </TableSortLabel>
                  : `${headCell.label}`
                }
              </TableCell>
            </Hidden>
          )})}
      </TableRow>
    </TableHead>
  );
}

ShelterTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default ShelterTableHead

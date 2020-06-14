import pathOr from '@ramda/pathor'

export const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy)
}

export const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const cutoffSecondsFromTime = time => {
  return time.split(':').splice(0, 2).join(':')
}

export const filterShelters = (shelters, searchValue, rules, ruleFilters, amenities, amenityFilters) => {
  const filteredShelters = []

  shelters.forEach(shelter => {
    let doesShelterPassesFilters = true

    const matchInName = shelter.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    const matchInStreet = shelter.address.street.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    const matchInZipCode = shelter.address.plz.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    const matchInCity = shelter.address.city.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1

    if (!matchInName && !matchInStreet && !matchInZipCode && !matchInCity) doesShelterPassesFilters = false


    rules.forEach(rule => {
      if (!doesShelterPassesFilters) return

      if (ruleFilters[rule.id]) {
        const shelterValueForRule = pathOr(false, rule.pathInData, shelter)
        if (!shelterValueForRule) doesShelterPassesFilters = false
      }
    })

    amenities.forEach(amenity => {
      if (!doesShelterPassesFilters) return

      if (amenityFilters[amenity.id]) {
        const shelterValueForRule = pathOr(false, amenity.pathInData, shelter)
        if (!shelterValueForRule) doesShelterPassesFilters = false
      }
    })

    if (doesShelterPassesFilters) filteredShelters.push(shelter)
  })

  return filteredShelters
}

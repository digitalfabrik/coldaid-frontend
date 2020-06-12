//import React from "react";
import DummyData from "./DummyData";


//TODO get this from user input
const region = 'berlin';
const language = 'de-de';
const base_url = ' http://130.149.22.44:8000/api';

let shelters = [];

const filterData = (data, filter) => {

  return data.filter(item => {

    for (let key in filter) {

      //Filter by string
      if (filter[key] && typeof filter[key] === 'string')
        if (item[key] === undefined || !item[key].toLowerCase().includes(filter[key].toLowerCase()))
          return false;

      //Check Boxes
      if (filter[key] && typeof filter[key] === 'boolean') {
        //Animals
        if (filter['animals'] === true && item['rules']['animals'] === false)
          return false;
        if (filter['kids_welcome'] === true && item['rules']['kids_welcome'] === false)
          return false
      }
    }
    return true;
  });
};

const FetchShelter = async (filters) => {
  let url = `http://130.149.22.44:8000/api/berlin/de-de/accommodations/`;

  // Use this if no backend is available
  //shelters = DummyData;

  if (shelters.length > 0) {
    console.log('Using cached shelters');
    return filterData(shelters, filters);
  }
  return await fetch(url).then(response => {
    return response.json()
  }).then(data => {
    shelters = data;
    return filterData(shelters, filters)
  });
};

export default FetchShelter;

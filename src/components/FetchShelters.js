import React from "react";
import DummyData from "../components/DummyData";


//TODO get this from user input
const region   = 'augsburg';
const language = 'de-de';
const base_url = 'http://localhost:8000/api';

let shelters = [];

const filterData = (data, filter) => {

    return data.filter(item => {

        for (let key in filter) {

            //Filter by string
            if (filter[key] && typeof filter[key] === 'string')
                if (item[key] === undefined || !item[key].includes(filter[key]))
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
    /* const lessons = Snapshot.docs.map(doc => {
         let data = doc.data();
         data.id =  doc.id;
         return data;
     });*/
    /*data= users.filter(function(item) {
        for (var key in filter) {
            if (item[key] === undefined || item[key] != filter[key])
                return false;
        }
        return true;
    });*/
};

const FetchShelter = (filters) => {
    let url = `${base_url}/${region}/${language}/accommodations/`;

    //TODO delete this (development server is currently sending unusable data)
    shelters = DummyData;

    if (shelters.length > 0) {
        console.log('Using cached shelters');
        return filterData(shelters, filters);
    }
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then(data => {
            shelters = data;
        })
        .finally(() => {
            if (shelters.length === 0) {
                shelters = DummyData;
            }
            return filterData(shelters, filters);
        });

    return filterData(shelters, filters);
};

export default FetchShelter;

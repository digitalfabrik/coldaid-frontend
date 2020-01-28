import React from "react";
import DummyData from "../components/DummyData";



const filterData = (data,filter) =>{


    const filteredData = data.filter(item =>{

        for (let key in filter) {

            //Filter by string
            if (filter[key] && typeof filter[key] === 'string' )
                if (item[key] === undefined || !item[key].includes(filter[key]))
                    return false;

            //Check Boxes
            if (filter[key] && typeof filter[key] === 'boolean'){
                //Animals
                if(filter['animals'] === true && item['rules']['animals']===false)
                    return false
            }
        }

        return true;


    });

    return filteredData;
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
}

const FetchShelter = (filters) =>{
    return filterData(DummyData,filters);
};

export default FetchShelter;

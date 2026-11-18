/*
//Get the data from the json file (read the data from the json file)

import fs, { readFileSync } from 'fs';

const usersData = readFileSync('data/users.json', 'utf-8');
const parseData: { id: string; user: string }[] = JSON.parse(usersData);
console.log("usersData :" ,parseData);


//Write the data to the json file (write the data to the json file)
const results:{ id: string; status: string }[] = [];

 results.push({id:userr.id, status:'passed'});
 results.push({id:userr.id, status:'failed', error: (error as Error).message});
];
*/
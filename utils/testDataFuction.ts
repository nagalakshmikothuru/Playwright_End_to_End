import { readFileSync } from 'node:fs';
import path from 'node:path';


class Dataclasfunction 
{
  getLoginData() :void
  {
    //const readFileSync = require('fs').readFileSync;
   //get data from data/users.json file
    const usersData = readFileSync('data/users.json', 'utf-8');
    console.log("usersData :" ,usersData)   

  }
};
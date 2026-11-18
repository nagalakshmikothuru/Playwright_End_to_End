import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import fs, { readFileSync } from 'fs';

test('Valid Login Test @smoke', async ({ page }) => {

//get data from data/users.json file
const usersData = readFileSync('data/users.json', 'utf-8');
console.log("usersData :" ,usersData)   







const data: { id: string; user: string }[] = [
    { id: 'A1', user: 'A11' },
    { id: 'A2', user: 'A22' },
    { id: 'A3', user: 'A33' },
    { id: 'A4', user: 'A44' }
];
console.log("data :" ,data)

//write the data to a JSON file
const fs = require('fs');
fs.writeFileSync('data/ex.json', JSON.stringify(data, null, 2));
})
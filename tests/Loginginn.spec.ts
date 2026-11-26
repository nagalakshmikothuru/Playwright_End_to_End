import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import fs, { readFileSync } from 'fs';

//======================================================
const usersData = readFileSync('data/users.json', 'utf-8');
const parseData: { id: string; user: string }[] = JSON.parse(usersData);
console.log("usersData :" ,parseData);
//======================================================
const results:{ id: string; status: string }[] = [];
//====================================================
parseData.forEach((userr:any)=>{
  test.skip(`Valid Login Test for ${userr.id}`, async ({ page }) => {
 
    // Create Login Page Object
    const loginPage: LoginPage = new LoginPage(page);

     try
     {

        // Navigate to Application
    await loginPage.navigateToLoginPage();
console.log("id :", userr.id);
    // Login with Valid Credentials
    await loginPage.login(
        userr.username,
        userr.password
    );


        await loginPage.verifyLoginSuccess();
        results.push({id:userr.id, status:'passed'});
     }catch(error)
     {
        console.log("Error :", (error as Error).message);
        results.push({id:userr.id, status:'failed'});
     }

    })

})

test.afterAll(async () => {

  fs.writeFileSync(
    'data/Results.json',
    JSON.stringify(results)
  );        
})





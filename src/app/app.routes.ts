import { Routes } from '@angular/router';
import { PublicTemplate } from './+pages/+public/public-template/public-template';
import { LoginPage } from './+pages/+public/login-page/login-page';

export const routes: Routes = [
    {path:'public',component:PublicTemplate,children:[
        {path:'login',component:LoginPage},
        {path:'',redirectTo:'login',pathMatch:'prefix'},
    ]},
    {path:'', redirectTo:'public',pathMatch:'full'},
];

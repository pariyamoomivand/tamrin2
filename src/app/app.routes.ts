import { Routes } from '@angular/router';
import { PublicTemplate } from './+pages/+public/public-template/public-template';
import { LoginPage } from './+pages/+public/login-page/login-page';
import { HomePage } from './+pages/+public/home-page/home-page';

export const routes: Routes = [
    {path:'public',component:PublicTemplate,children:[
        {path:'home',component:HomePage},
        {path:'login',component:LoginPage},
        {path:'',redirectTo:'home',pathMatch:'prefix'},
    ]},
    {path:'', redirectTo:'public',pathMatch:'full'},
];

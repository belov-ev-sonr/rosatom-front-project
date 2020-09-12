import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';

const routers: Routes = [
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports:      [RouterModule.forRoot(routers)],
    exports:      [RouterModule]
})
export class AppRouter {}

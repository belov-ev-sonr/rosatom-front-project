import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {RegistreComponent} from '../registre/registre.component';

const routers: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registre', component: RegistreComponent}
];

@NgModule({
    imports:      [RouterModule.forRoot(routers)],
    exports:      [RouterModule]
})
export class AppRouter {}

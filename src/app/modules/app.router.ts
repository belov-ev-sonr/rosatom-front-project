import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {RegistreComponent} from '../registre/registre.component';
import {BufferDealsComponent} from './buffer-deals/buffer-deals.component';

const routers: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registre', component: RegistreComponent},
    {path: 'buffer-deal', component: BufferDealsComponent}
];

@NgModule({
    imports:      [RouterModule.forRoot(routers)],
    exports:      [RouterModule]
})
export class AppRouter {}

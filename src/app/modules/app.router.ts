import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {RegistreComponent} from '../registre/registre.component';
import {BufferDealsComponent} from './buffer-deals/buffer-deals.component';
import {AuthGuardService} from '../guard/auth-guard.service';

const routers: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: 'registre', component: RegistreComponent, canActivate: [AuthGuardService]},
    {path: 'buffer-deal', component: BufferDealsComponent, canActivate: [AuthGuardService]}
];

@NgModule({
    imports:      [RouterModule.forRoot(routers)],
    exports:      [RouterModule]
})
export class AppRouter {}

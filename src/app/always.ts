import { LoginComponent } from './login/login.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot ,Router} from '@angular/router';
@Injectable()

export class Always {

    private firstNavigation = true;
    constructor( private router : Router){
        
    }
    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ):boolean{
            if(this.firstNavigation)
            {
                this.firstNavigation=false;
                if(route.component !=LoginComponent)
                {
                    this.router.navigateByUrl("/");
                    return false;
                }
            }
            return true;
        }
}
import { Component, OnInit, Input} from '@angular/core';
import { User } from '../user';
import { AuthUserService } from '../auth-user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router' ;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  isLoginError = false;


  constructor(private authUser: AuthUserService,
              private router: Router
            ) { }

  ngOnInit() {
  }


  onSubmit(email: string, password: string) {
    this.authUser.userAuthentification(email, password).subscribe((data: any) => {
      localStorage.setItem('userToken', data.access_token);
      this.router.navigate(['/home']);
    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
    });
  }

}

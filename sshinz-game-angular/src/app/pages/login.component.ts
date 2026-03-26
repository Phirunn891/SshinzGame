import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="main-box">
            <div class="login-box">
                <div class="logo-in-box"> <img src=".img/Logo.png" alt="" style="width: 150px; margin: 20px auto; display: block;"></div>
                <div class="box-input">
                    <div class="input-text"> <h1 style="color: white; text-align: center;">Sign In</h1></div>
                    <div class="input-information" style="color: white; padding: 20px;"> 
                        <div style="text-align: center;">
                            Username : <input type="text" name="Username"  maxlength="8" placeholder="Enter Username" style="margin-bottom: 20px;"> <br>
                            Password : <input type="password" name="Password"  maxlength="8" placeholder="Enter Password" style="margin-bottom: 20px;"> <br>
                            <div class="login-acc">
                                <a routerLink="/">
                                    <input type="submit" value="Login" style="background-color: purple; color: white; padding: 10px 30px; border: none; border-radius: 5px; cursor: pointer;">
                                </a> <br>
                                <a routerLink="/register" style="color: #888; text-decoration: none; font-size: 14px;">Create New Account?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  `,
  styles: `
    .main-box { width: 100%; height: 500px; display: flex; justify-content: center; align-items: center; background-color: black; }
    .login-box { width: 400px; border: 1px solid #333; border-radius: 10px; background-color: #111; }
    .box-input input { background: #222; border: 1px solid #444; color: white; padding: 10px; border-radius: 5px; width: 250px; }
  `
})
export class LoginComponent {}

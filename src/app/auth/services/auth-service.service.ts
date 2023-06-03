import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/mock/user';
import { userMock } from '../models/mock/userMockLogin'
import { Token } from '../models/mock/token'
import { StorageService } from './storage-service.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService{

  IsAuth: boolean = false;
  private authSource = new Subject<boolean>();
  public authChange = this.authSource.asObservable();

  constructor(private storageService: StorageService, private http: HttpClient) {
    if(this.storageService.GetToken("IsAuth") !== '' && this.storageService.GetToken("AuthUserToken") !== ''){
      this.IsAuth = this.storageService.GetToken("IsAuth") == 'true';
      this.authSource.next(true);
    }
  }

  public GetToken(){
    return this.storageService.GetToken("AuthUserToken");
  }

  public SetToken(value: any){
    this.storageService.SetToken("AuthUserToken", value);
    this.IsAuth = true;
    this.storageService.SetToken("IsAuth", this.IsAuth);
    this.authSource.next(this.IsAuth);
  }

  public ResetToken(){
    this.storageService.SetToken("AuthUserToken", "");
    this.IsAuth = false;
    this.storageService.SetToken("IsAuth", this.IsAuth);
    this.authSource.next(this.IsAuth);
  }

  public LogOut(){
    this.ResetToken();
  }

  public requestLogin(){
    this.http.post<User>()
  }


}

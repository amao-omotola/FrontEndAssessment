import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private toastr: ToastrService
  ) { }

  showSuccess( message: any){
    this.toastr.success(message, "Success")
  }

  showError( message: any){
    this.toastr.error(message, "Error")
  }

  showInfo( message: any){
    this.toastr.info(message, "Info")
  }

  showWarning( message: any){
    this.toastr.warning(message, "Warning")
  }
}

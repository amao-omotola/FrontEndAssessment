import { Component, OnInit } from '@angular/core';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';

import { ProfileService } from '../../../services/profile/profile.service';
import { NotificationService } from '../../../shared/notification.service';
@Component({
  selector: 'app-user-management',
  standalone: false,
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent  implements OnInit{
  dataSource= new MatTableDataSource<any> as unknown as CdkTableDataSourceInput<any>
  displayedColumns: string[] = ['email', 'first_name', 'last_name', 'avatar'];
  currentPage: number = 0;
  pageSize: number = 10;
  totalItems: number = 0 ;
  
  constructor(
    private profileService: ProfileService,
    private toaster: NotificationService
  ){

  }
  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.profileService.getUsers(this.currentPage).subscribe({
      next:(res:any)=>{ 
        this.toaster.showSuccess('Data Fetched Successfully')
        this.dataSource = new MatTableDataSource<any>(res.data);
        this.pageSize = res.per_page
        this.totalItems = res.total;
      },
      error: (err: any) => {
        this.toaster.showError('Error occured in fetching data')
      }
    })
  }
  onPageChange(event: any){
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUsers();
  }
}

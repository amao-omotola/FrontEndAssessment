import { Component, OnInit } from '@angular/core';
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';

import { ProfileService } from '../../../services/profile/profile.service';
@Component({
  selector: 'app-user-management',
  standalone: false,
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss'
})
export class UserManagementComponent  implements OnInit{
  dataSource= new MatTableDataSource<any> as unknown as CdkTableDataSourceInput<any>
  // dataSource: MatTableDataSource<any> | null = null;
  displayedColumns: string[] = ['id', 'name'];
  currentPage: number = 0;
  pageSize: number = 10;
  totalItems: number = 0 ;
  
  constructor(
    private profileService: ProfileService,
  ){

  }
  ngOnInit(): void {
    
  }

  getUsers(){

  }
  onPageChange(event: any){
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getUsers();
  }
}

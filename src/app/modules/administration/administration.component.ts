import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../models/user.model';
import {AdministrationService} from './services/administration.service';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {UserEditComponent} from './user-edit/user-edit.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css']
})
export class AdministrationComponent implements OnInit {

  public usersList: UserModel[] = [];

  constructor(
      private adminService: AdministrationService,
      private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.adminService.getUsersList().subscribe((users) => {
      this.usersList = users;
    });
  }

  public editUser(id: number): void {
    this.adminService.getUserById(id).subscribe(user => {
      const config = this.getConfigForModalEdit(user);
      const dialogRef = this.dialog.open(UserEditComponent, config);
      dialogRef.afterClosed().subscribe((isSaved) => {
        if (isSaved) {
          this.init();
        }
      });
    });
  }

  public createUser(): void {
    const user = new UserModel();
    const config = this.getConfigForModalEdit(user);
    const dialogRef = this.dialog.open(UserEditComponent, config);
    dialogRef.afterClosed().subscribe((isSaved) => {
      if (isSaved) {
        this.init();
      }
    });
  }

  private getConfigForModalEdit(user: UserModel): object {
    return {
      data: user,
      width: '800px',
      height: '600px',
      backdropClass: 'dialog_class_edit'
    };
  }

}

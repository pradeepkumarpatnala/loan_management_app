import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { AuthService } from 'src/app/service/auth.service';
import { LoanService } from 'src/app/service/loan.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.css']
})
export class AddLoanComponent implements OnInit {
  addForm:FormGroup;
  loan:Loan;
  isUserInValid:boolean=false;
  isLoanAdded:boolean=false;
  constructor(private router:Router,private userService:UserService,private loanService:LoanService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
      userid: new FormControl(null,Validators.required),
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      loanProperty: new FormControl(null,Validators.required),
      loanAmount: new FormControl(null,Validators.required),
      loantype: new FormControl(null,Validators.required),
      loanterm: new FormControl(null,Validators.required),
      dateOfOrigin: new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')])
    });
  }
  onSubmit(){
   // console.log(this.addForm.value);
    this.userService.getUserByUserid(this.addForm.value.userid).subscribe(
      data=>{
      //  console.log(data);
        if(data.length==0){
          this.isUserInValid=true;
          this.addForm.reset();
          setTimeout (() => {
           this.isUserInValid=false;
         }, 4000);
        }
        else{
          if(data[0].id==this.userService.userId){
            this.isUserInValid=true;
            this.addForm.reset();
            setTimeout (() => {
              this.isUserInValid=false;
            }, 5000);
          }
          else{
            this.loan=this.addForm.value;
           // console.log(this.loan);
            this.loanService.addLoan(this.loan).subscribe(
              data=>{
                console.log("loan added successfully");
                this.isLoanAdded=true;
              },
              error=>{
                console.log("something went wrong in adding loan");
              }
            )
          }
        }
      }
    )
  }

}

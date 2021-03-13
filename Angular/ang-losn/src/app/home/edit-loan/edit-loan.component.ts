import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { AuthService } from 'src/app/service/auth.service';
import { LoanService } from 'src/app/service/loan.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-loan',
  templateUrl: './edit-loan.component.html',
  styleUrls: ['./edit-loan.component.css']
})
export class EditLoanComponent implements OnInit {
  editForm:FormGroup;
  loan:Loan;
  isLoanEdited:boolean=false;
  isUserInvalid=false;
  loanid:number;
  constructor(private router:Router,private loanService:LoanService,private AuthService:AuthService,private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      id:new FormControl(null),
      userid: new FormControl(null,Validators.required),
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      loanProperty: new FormControl(null,Validators.required),
      loanAmount: new FormControl(null,Validators.required),
      loantype: new FormControl(null,Validators.required),
      loanterm: new FormControl(null,Validators.required),
      dateOfOrigin: new FormControl(null,[Validators.required,Validators.pattern('^[0-9]{4}-[0-9]{2}-[0-9]{2}$')])
    });

    this.route.params.subscribe((params: Params) => {
      const id= params['id'];
      this.loanid=id;
      this.loanService.getLoanById(id).subscribe(
        data=>{
       //   console.log(data);
          this.editForm.setValue({
            id:id,
            userid:data.userid,
            firstName:data.firstName,
            lastName:data.lastName,
            loanProperty:data.loanProperty,
            loanAmount:data.loanAmount,
            loantype:data.loantype,
            loanterm:data.loanterm,
            dateOfOrigin:data.dateOfOrigin

          })
        }
      )
      })
  }

  onEdit(){
  //  console.log(this.editForm.value);
    this.userService.getUserByUserid(this.editForm.value.userid).subscribe(
      data=>{
       // console.log(data);
        if(data.length==0){
          this.isUserInvalid=true;
         
          setTimeout (() => {
           this.isUserInvalid=false;
         }, 4000);
        }
        else{
          if(data[0].id==this.userService.userId){
            this.isUserInvalid=true;
            
            setTimeout (() => {
              this.isUserInvalid=false;
            }, 5000);
          }
          else{
            this.loan=this.editForm.value;
            this.loanService.updateLoan(this.loanid,this.loan).subscribe(
              data=>{
                console.log("loan edited successfully");
                this.isLoanEdited=true;
              },
              error=>{
                console.log("something went wrong in editing loan");
              }
            )
           
          }
        }
      }
    )
  }

  }



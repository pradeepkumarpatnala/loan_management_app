import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/service/loan.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userId:number;
  searchForm:FormGroup;
  loans:Loan[];
  isLoansAvailable:boolean=true;
  isLoading:boolean=false;
  constructor(private userService:UserService,private loanService:LoanService) { }

  ngOnInit() {
   this.userId= this.userService.getuserIdGlobal();
   // console.log(this.userId);
    this.searchForm = new FormGroup({
      firstName: new FormControl(null,Validators.required),
      lastName: new FormControl(null,Validators.required),
      loanNumber:new FormControl(null,[Validators.required,Validators.pattern('^[0-9]+$')])
    });
  }
  onSubmit(){
    this.loans=null;
    this.isLoading=true;
    this.loanService.searchforLoan(this.searchForm.value.firstName,this.searchForm.value.lastName,this.searchForm.value.loanNumber).
    subscribe(
      (data)=>{
        if(data.length==0){
          this.isLoading=false;
          this.isLoansAvailable=false;
          this.searchForm.reset();
        }
        else{
          this.searchForm.reset();
          this.isLoading=false;
          this.loans=data;
          this.isLoansAvailable=true;
         // console.log(data);
        }
       
      }
    )
    
  
  }
}



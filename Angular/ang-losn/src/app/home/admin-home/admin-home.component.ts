import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loan } from 'src/app/model/loan';
import { LoanService } from 'src/app/service/loan.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  loans:Loan[];
  isLoansAvailable:boolean=true;
  isDeleted:boolean=false;
  isLoading:boolean=true;
  constructor(private router:Router,private loanService:LoanService) { }
  
  ngOnInit() {  
    this.loanService.getAllLoans().subscribe(
      data=>{
        if(data.length==0){
          this.isLoading=false;
          this.isLoansAvailable=false;
        }
        else{
          this.isLoading=false;
          this.loans=data;
         // console.log(this.loans);
        }
      }
    )

    
  }
  onDelete(id:number){

    this.loanService.deleteLoan(id).subscribe(
      data=>{
        this.isDeleted=true;
        this.loanService.getAllLoans().subscribe(
          data=>{
            if(data.length==0){
              this.isLoansAvailable=false;
            }
            else{
              this.loans=data;
              console.log(this.loans);
            }
          }


        )
        setTimeout (() => {
          this.isDeleted=false;
        }, 5000);

      },error=>{
        console.log("something went wrong in deleting the loan")
      }
    )

  }
  onNewLoan(){
    
    this.router.navigate(['add-loan']);
  }
  onEdit(id:number){
    this.router.navigate(['edit-loan',id]);
  }

}

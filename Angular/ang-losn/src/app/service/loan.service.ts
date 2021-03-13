import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../model/loan';


@Injectable({
  providedIn: 'root'
})
export class LoanService {
 
  constructor(private httpClient: HttpClient) { }


  searchforLoan(firstName:number,lastName:number,loanNumber:number):Observable<Loan[]>{
    // return this.httpClient.get<Loan[]>('http://localhost:3000/loan?firstName='+firstName+'&lastName='+lastName+'&id='+loanNumber);
    return this.httpClient.get<Loan[]>('http://localhost:8086/loanService/searchLoans?firstName='+firstName+'&lastName='+lastName+'&id='+loanNumber);
  }
  getAllLoans():Observable<Loan[]>{
    // return this.httpClient.get<Loan[]>('http://localhost:3000/loan');
    return this.httpClient.get<Loan[]>('http://localhost:8086/loanService/getAllLoans');
  }
  addLoan(loan:Loan):Observable<void>{
    // return this.httpClient.post<void>('http://localhost:3000/loan',loan);
    return this.httpClient.post<void>('http://localhost:8086/loanService/addLoan',loan);
  }
  deleteLoan(loanid:number):Observable<void>{
    // return this.httpClient.delete<void>('http://localhost:3000/loan/'+loanid);
    return this.httpClient.delete<void>('http://localhost:8086/loanService/deleteLoan?id='+loanid);
  }
  getLoanById(id:number):Observable<Loan>{
    // return this.httpClient.get<Loan>('http://localhost:3000/loan/'+id);
    return this.httpClient.get<Loan>('http://localhost:8086/loanService/getLoan?id='+id);
  }
  updateLoan(id:number,loan:Loan):Observable<void>{
    // return this.httpClient.put<void>('http://localhost:3000/loan/'+id,loan);
    return this.httpClient.put<void>('http://localhost:8086/loanService/updateLoan',loan);
    
  }

}

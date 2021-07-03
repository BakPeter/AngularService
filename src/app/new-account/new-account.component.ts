import { Component, OnInit, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
// providers: [LoggingService],
export class NewAccountComponent implements OnInit {
  // constructor(
  //   private loggingService: LoggingService,
  //   private AccountsService: AccountsService
  // ) {}
  constructor(private accountsService: AccountsService) {
    accountsService.stautsUpdated.subscribe((status: string) =>
      alert('new status ' + status)
    );
  }

  ngOnInit(): void {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChanged(accountStatus);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'app/services/data.service';
import { Member } from 'app/models/member.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  communityMembers: Array<Member> = [];

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.GetMembersList().subscribe((members: Array<Member>) => {
      this.communityMembers = members;
    });
  }

  ngOnDestroy() {

  }
}

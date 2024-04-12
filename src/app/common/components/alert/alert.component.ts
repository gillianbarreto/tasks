import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  message!: string;
  @Input() type: string = "info";

  public alertClass: string = "alert-info";

  constructor() { }

  ngOnInit() {
    this.alertClass = `alert-${this.type}`;
  }

}
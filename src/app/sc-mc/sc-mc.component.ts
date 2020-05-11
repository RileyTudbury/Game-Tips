import { Component, OnInit } from '@angular/core';
import { MiningNode } from '../mining-node';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sc-mc',
  templateUrl: './sc-mc.component.html',
  styleUrls: ['./sc-mc.component.css']
})
export class ScMcComponent implements OnInit {

  model = new MiningNode();
  totalValue = null;
  constructor() { }


  ngOnInit(): void {
  }

  onSubmit() {
    if (this.model.p4) {
      return this.totalValue =
        ((this.model.mass * (this.model.p1 * .01)) * this.model.m1) +
        ((this.model.mass * (this.model.p2 * .01)) * this.model.m2) +
        ((this.model.mass * (this.model.p3 * .01)) * this.model.m3) +
        ((this.model.mass * (this.model.p4 * .01)) * this.model.m4)
    }
    if (this.model.p3) {
      return this.totalValue =
        ((this.model.mass * (this.model.p1 * .01)) * this.model.m1) +
        ((this.model.mass * (this.model.p2 * .01)) * this.model.m2) +
        ((this.model.mass * (this.model.p3 * .01)) * this.model.m3)
    }
    if (this.model.p2) {
      return this.totalValue =
        ((this.model.mass * (this.model.p1 * .01)) * this.model.m1) +
        ((this.model.mass * (this.model.p2 * .01)) * this.model.m2)
    }
    if (this.model.p1) {
      return this.totalValue = ((this.model.mass * (this.model.p1 * .01)) * this.model.m1)
    }
  }
}

import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgxWheelComponent, TextAlignment, TextOrientation } from 'ngx-wheel'

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {

  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  idToLandOn: any;
  items: any[] = [];
  prizes: any[] = ["House", "Car", "Phone", "10,000 usd", "10 usd", "Ball", "Dog", "Nothing", "Cake", "Pen"]
  textOrientation: TextOrientation = TextOrientation.HORIZONTAL
  textAlignment: TextAlignment = TextAlignment.OUTER
  round: number = 0;
  rounds: number = 0;
  win: any;

  constructor() { }


  ngOnInit() {
    this.idToLandOn = this.prizes[Math.floor(Math.random() * this.prizes.length)];
    const colors = ['#FF0000', '#000000']
    this.items = this.prizes.map((value, index) => ({
      fillStyle: colors[index % 2],
      text: `${value}`,
      id: value,
      textFillStyle: 'white',
      textFontSize: '25'
    }))


  }

  reset() {
    this.wheel.reset()
  }

  async spin(prize) {
    this.idToLandOn = prize;
    await new Promise(resolve => setTimeout(resolve, 0));
    this.wheel.spin()

  }

  after() {
    this.reset();
    this.round++;
    this.win = this.idToLandOn;
    this.idToLandOn = this.prizes[Math.floor(Math.random() * this.prizes.length)];


  }
}
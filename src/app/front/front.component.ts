import { Component, OnInit, NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss'],
  
})
@NgModule({
  imports:[MatMenuModule,MatGridListModule]
})
export class FrontComponent implements OnInit {
  
  slideDidLoad(slides){
    slides.startAutoplay();
      }

  constructor() { }

  ngOnInit() {}

 
  

}

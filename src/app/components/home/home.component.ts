import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit(): void {
    
  }
  openNav(): void {
    const sidenav = document.querySelector('.menu-sidebar');
    if (sidenav?.classList.contains("expanded")) {
      sidenav && sidenav.classList.add("compacted");
      sidenav && sidenav.classList.remove("expanded");
    } else {
      sidenav && sidenav.classList.add("expanded");
      sidenav && sidenav.classList.remove("compacted");
    }
    
    //const collection = document.getElementsByClassName(".mySidenav").style.width = "255px";
    //const collection = document.getElementsByClassName(".main").style.marginLeft = "255px";
  }
  closeNav(): void {
    const sidenav = document.querySelector('.menu-sidebar');
    sidenav && sidenav.classList.add("compacted");
    sidenav && sidenav.classList.remove("expanded");
    //const collection = document.getElementsByClassName(".mySidenav").style.width = "0";
    //const collection = document.getElementsByClassName(".main").style.marginLeft= "0";
  }
}
function id(id: any): any {
  throw new Error('Function not implemented.');
}


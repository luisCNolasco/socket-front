import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  room:string | null = '' 
  constructor(private router:ActivatedRoute) { 
  }
  
  ngOnInit(): void {
    this.room = this.router.snapshot.paramMap.get('room')
    console.log(this.room);
    
  }
//npm i ngx-socket-io@3.0.1 ngx-cookie-service@11.0.1
}

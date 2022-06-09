import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  
  constructor(
    public modal: ModalService,
    public auth: AuthService,
   
  ) { 
   
  }

  ngOnInit(): void {
  }

  openModal($event: Event) {
    $event.preventDefault() //as normal <a></a> tage feature redirects to different page, we need to use this function to remove the default action

    this.modal.toggleModal('auth')
  }






}

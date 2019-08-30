import { Component, OnInit } from '@angular/core';
import { OrganizadoresService } from '../services/organizadores.service';

@Component({
  selector: 'app-organizadores',
  templateUrl: './organizadores.component.html',
  styleUrls: ['./organizadores.component.css'],
})
export class OrganizadoresComponent implements OnInit {

  constructor(private organizadoresService: OrganizadoresService) {
    console.log(organizadoresService.getOrganizadores());
  }

  ngOnInit() {
  }

}

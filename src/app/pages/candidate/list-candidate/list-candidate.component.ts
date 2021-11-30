import { Util } from './../../../controller/util';
import { MessageService } from 'primeng/api';
import { TokenService } from './../../../auth/services/token.service';
import { BASE_URL } from './../../../controller/staticValues';
import { NetworkService } from 'src/app/shared/services/network.service';
import {Router} from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.css']
})
export class ListCandidateComponent implements OnInit {

  opcoesTable = [
    {
      label: 'Alterar', icon: 'fa fa-edit', command: (e) => {
          this.router.navigate([`edit-candidate/${e.id}`])
        }},
    {
      label: 'Excluir', icon: 'fa fa-trash-alt', command: (e) => {
        if (this.tokenService.possuiToken()) {

        }
        this.messageService.add(Util.pushErrorMsg('Faça o login para utilizar essa ação'));
      }},
  ]

  constructor(private networkService: NetworkService, private router: Router, private tokenService: TokenService, private messageService: MessageService) { }

  list: []

  ngOnInit() {
    this.networkService.get(BASE_URL, 'candidate').subscribe((value: []) => {
      this.list = value
      console.log(value);
    })
  }

  newCandidate() {
    this.router.navigate(['register-candidate']);
  }
}

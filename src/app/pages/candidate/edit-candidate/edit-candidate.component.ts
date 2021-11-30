import { BASE_URL } from './../../../controller/staticValues';
import { NetworkService } from './../../../shared/services/network.service';
import { Formulario } from './../../../controller/Formulario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Candidate } from './candidate';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-candidate',
  templateUrl: './edit-candidate.component.html',
  styleUrls: ['./edit-candidate.component.css']
})
export class EditCandidateComponent implements OnInit {

  form: FormGroup
  value: Date;
  newCandidate = new Candidate();
  id;

  constructor(private routeNavigate: Router, private formBuilder: FormBuilder, private route: ActivatedRoute, private networkService: NetworkService) {
    this.form = Formulario.createForm(this.newCandidate, this.formBuilder, Candidate.validators())
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');

      if (this.id) {
        this.networkService.get(BASE_URL, `candidate?pk=${this.id}`).subscribe(value => {
          const data = Formulario.prepareValueToForm(this.newCandidate, value[0], Candidate.datas(), null, null, null);
          Object.keys(data).forEach(key => this.form.controls[key].setValue(data[key]))
        })
      }
    })
  }

  save() {
    let value = Formulario.parseForm(this.newCandidate, Object.assign({}, this.form.value), null, null, Candidate.datas(), null, null, null)
    if (this.id) {
      this.networkService.put(BASE_URL, `candidate`, value).subscribe(res => {return})
    }
    this.networkService.post(BASE_URL, `candidate`, value).subscribe(res => {

    })
  }

  cancel() {
    this.routeNavigate.navigate(['candidate']);
  }
}

import { Validators } from '@angular/forms';

export class Candidate {
  id: number = 0;
  password: string = "";
  last_login: string = "";
  is_superuser: boolean = false;
  full_name: string = "";
  first_name: string = "";
  last_name: string = "";
  email: string = "";
  is_staff: boolean = false;
  is_active: boolean = false;
  date_joined: string = "";
  username: string = "";
  confirm_username: boolean = false;
  is_social: boolean = false;
  phone: string = "";
  publisher: boolean = false;
  name: string = "";
  cpf: string = "";
  rg: number = 0;
  birth_date: string = "";
  lattes: string = "";
  about: string = "";
  groups: [] = [];
  user_permissions: [] = [];

  static datas() {
    return ['date_joined', 'birth_date'];
  }

  static validators() {
    return [
      { campo: 'email', validation: Validators.compose([Validators.required, Validators.email]) },
      { campo: 'password', validation: Validators.compose([Validators.required]) }
    ]
  }
}

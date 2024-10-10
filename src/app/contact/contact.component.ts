import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Contact } from './contact';
import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [ContactService],
})
export class ContactComponent implements OnInit {
  allContacts: Contact[] = [];
  userArray: any = [];
  userForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    emailId: new FormControl(''),
    createdAt: new FormControl(''),
    age: new FormControl(null),
    gender: new FormControl(''),
    mobilenumber: new FormControl(null),
    pan_no: new FormControl(''),
    adhaar_no: new FormControl(null),
    status: new FormControl(true),
  });
  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getAll().subscribe((data: any) => {
      this.allContacts = data;
    });
  }
  addContactComp() {
    this.router.navigateByUrl('/contact/addcontact');
  }

  onSaveContact() {
    const obj = this.userForm.value;
    console.log('Obj=>', obj);
    this.contactService.saveContactDet(obj).subscribe((res: any) => {
      this.allContacts.push(obj);
      alert('Contact saved');
    });
  }

  deleteContact(id: any) {
    this.contactService.delete(id).subscribe({
      next: (res) => {
        this.allContacts = this.allContacts.filter((_) => _.id != id);
      },
    });
  }
}

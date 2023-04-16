import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
    isSubmitted: boolean = false;
    minLength: number = 20;
    emailSent: boolean = false;
    emailNotSent: boolean = false;

    constructor(private fb: FormBuilder, private httpClient: HttpClient) {}

    contactForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: [
            '',
            [Validators.required, Validators.minLength(this.minLength)],
        ],
    });

    async commitForm() {
        this.httpClient
            .post<any>(
                'https://denniskoester.com/send_mail/send_mail.php',
                this.setFormData()
            )
            .subscribe({
                complete: () => (this.emailSent = true),
                error: () => (this.emailNotSent = true),
            });

        this.isSubmitted = true;

        setTimeout(() => {
            this.isSubmitted = false;
        }, 2000);

        this.contactForm.reset();
    }

    setFormData() {
        const data = this.contactForm.value;
        const fd = new FormData();
        fd.append('name', data.name);
        fd.append('email', data.email);
        fd.append('message', data.message);
        return fd;
    }
}

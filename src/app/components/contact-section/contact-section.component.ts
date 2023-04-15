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
        const data = this.contactForm.value;
        const fd = new FormData();
        fd.append('name', data.name);
        fd.append('email', data.email);
        fd.append('message', data.message);

        this.httpClient
            .post('https://denniskoester.com/send_mail/send_mail.php', fd)
            .subscribe({
                complete: () => console.log('complete'),
                error: (err) => console.log(err),
            });

        this.isSubmitted = true;

        setTimeout(() => {
            this.isSubmitted = false;
        }, 2000);
        this.contactForm.reset();
    }
}

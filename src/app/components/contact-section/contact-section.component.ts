import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
    async commitForm(data: any, form: NgForm) {
        console.log('test')
        await this.sendMail(data);

        form.resetForm();
    }

    async sendMail(data: any) {
        let fd = new FormData();
        fd.append('name', data.name);
        fd.append('email', data.email);
        fd.append('message', data.message);

        await fetch('https://denniskoester.com/send_mail/send_mail.php', {
            method: 'POST',
            body: fd,
        });
    }
}

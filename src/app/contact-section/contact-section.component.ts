import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
    @ViewChild('contactForm') contactForm: ElementRef;
    @ViewChild('nameField') nameField: ElementRef;
    @ViewChild('emailField') emailField: ElementRef;
    @ViewChild('messageField') messageField: ElementRef;
    @ViewChild('sendButton') sendButton: ElementRef;

    async sendMail() {
        console.log('sending mail', this.contactForm);

        let nameField = this.nameField.nativeElement;
        let emailField = this.emailField.nativeElement;
        let messageField = this.messageField.nativeElement;
        let sendButton = this.sendButton.nativeElement;

        nameField.disabled = true;
        emailField.disabled = true;
        messageField.disabled = true;
        sendButton.disabled = true;

        // Animation for sending

        let fd = new FormData();
        fd.append('name', nameField.value);
        fd.append('email', emailField.value);
        fd.append('message', messageField.value);

        // Send email
        await fetch('https://denniskoester.com/send_mail/send_mail.php', {
            method: 'POST',
            body: fd,
        });

        //  Text for email sent

        nameField.disabled = false;
        emailField.disabled = false;
        messageField.disabled = false;
        sendButton.disabled = false;

        nameField.value = '';
        emailField.value = '';
        messageField.value = '';
    }
}

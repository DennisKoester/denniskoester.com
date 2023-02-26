import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-contact-section',
    templateUrl: './contact-section.component.html',
    styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
    validation = false;

    @ViewChild('contactForm') contactForm: ElementRef;
    @ViewChild('nameField') nameField: ElementRef;
    @ViewChild('emailField') emailField: ElementRef;
    @ViewChild('messageField') messageField: ElementRef;
    @ViewChild('sendButton') sendButton: ElementRef;

    async sendMail() {
        if (this.validation === true) {
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

            this.resetValidation();
        } else {
            console.log('Email not send');
        }
    }

    // resetForm() {
    //     nameField.value = '';
    //     emailField.value = '';
    //     messageField.value = '';
    // }

    submitValidation() {
        let nameField = this.nameField.nativeElement;
        let emailField = this.emailField.nativeElement;
        let messageField = this.messageField.nativeElement;

        let allData = [nameField.value, emailField.value, messageField.value];

        for (let i = 0; i < allData.length; i++) {
            const value = allData[i];
            let required = document.getElementById(`required${i}`);
            if (value == 0) {
                required.classList.remove('hidden');
                this.validation = false;
            } else {
                required.classList.add('hidden');
            }
        }
        return this.validation;
    }

    validationContactForm(id, input) {
        let required = document.getElementById(`required${id}`);
        let inputValue = (<HTMLInputElement | null>(
            document.getElementById(input)
        ))?.value;

        console.log(inputValue);

        if (inputValue == '') {
            required.classList.remove('hidden');
        } else {
            required.classList.add('hidden');
        }
    }

    resetValidation() {
        for (let i = 0; i < 6; i++) {
            let text = document.getElementById(`required${i}`);
            text.classList.add('hidden');
        }
    }
}

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
        if (this.submitValidation() === true) {
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

    // resetForm() {
    //     nameField.value = '';
    //     emailField.value = '';
    //     messageField.value = '';
    // }

    submitValidation() {
        let nameField = this.nameField.nativeElement;
        let emailField = this.emailField.nativeElement;
        let messageField = this.messageField.nativeElement;
        let validation = true;

        let allData = [nameField.value, emailField.value, messageField.value];

        for (let i = 0; i < allData.length; i++) {
            const value = allData[i];
            let required = document.getElementById(`required${i}`);
            if (value == 0) {
                required.classList.remove('hidden');
                validation = false;
            } else {
                required.classList.add('hidden');
            }
        }
        return validation;
    }

    validationContactForm(id: number, input: string) {
        let required = document.getElementById(`required${id}`);
        let inputValue = (<HTMLInputElement | null>(
            document.getElementById(input)
        ))?.value;

        if (inputValue == '') {
            required.classList.remove('hidden');
        } else {
            required.classList.add('hidden');
        }
    }
}

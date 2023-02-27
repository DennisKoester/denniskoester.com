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

    // validation = true;

    submitValidation() {
        let nameField = this.nameField.nativeElement;
        let emailField = this.emailField.nativeElement;
        let messageField = this.messageField.nativeElement;
        let validation = true;

        let allData = [nameField.value, emailField.value, messageField.value];

        for (let i = 0; i < allData.length; i++) {
            const value = allData[i];
            let required = document.getElementById(`required${i}`);
            let validateSign = document.getElementById(`validateSign${i}`);

            if (value == 0) {
                required.classList.remove('hidden');
                validateSign.classList.remove('hidden');

                validation = false;
            } else {
                required.classList.add('hidden');
                validateSign.classList.add('hidden');
            }
        }

        return validation;
    }

    // validateSign = '';

    validationContactForm(id: number, input: string) {
        let required: any = document.getElementById(`required${id}`);
        let validateSign: any = document.getElementById(`validateSign${id}`);
        let inputField: any = document.getElementById(input);

        validateSign.classList.remove('hidden');

        if (inputField.value == '') {
            required.classList.remove('hidden');
            validateSign.src = 'assets/img/red_exclamation.svg';
        } else {
            required.classList.add('hidden');
            validateSign.src = 'assets/img/green_check.svg';
        }
    }
}

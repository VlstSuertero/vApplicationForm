import { FormControl } from '@angular/forms'

export class MyValidators {

    // static restrictedEmails(control: FormControl): {[key: string]: boolean} | null {
    //     if (['test@test.test'].includes(control.value)) {
    //         return {restrictedEmails:true}
    //     }
    //     return null
    // }

    static uniqEmail(control: FormControl): Promise<any> {
        return new Promise<any>(resolve => {
            setTimeout( () => {
                if (control.value === 'test@test.test') {
                    resolve({uniqEmail: true})
                } else {
                    resolve (null)
                }
            },2000)
        })
    }
}

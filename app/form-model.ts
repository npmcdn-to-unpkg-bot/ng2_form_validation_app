export class FormModel {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public monthOfBirth: string,
        public dayOfBirth: string,
        public yearOfBirth: string,
        public agreement: boolean
    ) { }

}

export class Friend {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber: string;
  public language: string;


  constructor(firstName: string, lastName: string, email: string, phoneNumber: string, language: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.language = language;
  }
}

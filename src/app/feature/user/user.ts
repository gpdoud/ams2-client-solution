export class User {
  Id: number;
  Username: string;
  Password: string;
  Firstname: string;
  Lastname: string;
  Phone: string;
  Email: string;
  Active: boolean;

  constructor(
    Id: number,
    Username: string,
    Password: string,
    Firstname: string,
    Lastname: string,
    Phone: string,
    Email: string,
    Active: boolean
  ) {
    this.Id = Id;
    this.Username = Username;
    this.Password = Password;
    this.Firstname = Firstname;
    this.Lastname = Lastname;
    this.Phone = Phone;
    this.Email = Email;
    this.Active = Active;
  }
}
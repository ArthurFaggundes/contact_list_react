class ContactModel {
  fullName: string
  mail: string
  cellNumber: number
  id: number

  constructor(fullName: string, mail: string, cellNumber: number, id: number) {
    this.fullName = fullName
    this.mail = mail
    this.cellNumber = cellNumber
    this.id = id
  }
}
export default ContactModel

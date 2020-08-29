type Currency = "USD"|"EURO"

export default interface Budget{
  id: string
  userId:string
  name:string
  currency: Currency
}

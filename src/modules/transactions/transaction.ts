export default interface Transaction {
  id: string;
  subCategoryId: string;
  outflow: number;
  inflow: number;
  cleared: boolean;
  description: string;
  date: string;
}

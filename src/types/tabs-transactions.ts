export interface TransactionsTableProps {
  tableHead: string[];
  tableTransactionsData: {
    description: string;
    transactionId: string;
    type: string;
    card: string;
    date: string;
    amount: string;
  }[];
}

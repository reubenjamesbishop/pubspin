export interface Prize {
  prize_id: number;
  name: string;
  description?: string;
  status: string;
  date_added: string;
  payout_frequency: string;
  avatar?: string;
}

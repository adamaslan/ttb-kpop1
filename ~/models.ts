export type Model = {
  id: string;
  name: string;
  type: string;
  parameter_count: number;
  experts: number;
  context_window_tokens: number;
  release_date: string;  // Add this required field
  created_at?: string;
};
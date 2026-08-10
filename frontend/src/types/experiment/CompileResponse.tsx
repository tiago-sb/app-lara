export type CompileError = {
  jobId: string;
  success: boolean;
  errorMessage?: string;
  logs?: string;
};

export type CompileSummary = {
  success: boolean;
  message: string;
  details?: string;
};
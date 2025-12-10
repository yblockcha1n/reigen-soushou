// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  type: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  error?: string;
}

// Common Error Types
export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

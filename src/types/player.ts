export interface Player {
  name: string;
  role?: string;
  bio?: string;
  image: string;
  admin?: string[];
  testimoni?: boolean;
  quote?: string;
  ROTD?: Record<string, number>;
}

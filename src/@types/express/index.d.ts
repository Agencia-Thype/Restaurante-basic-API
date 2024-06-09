export {};

declare global {
  namespace Express {
    interface Request {
      user: {
        isAdmin: boolean;
        email: string;
        id: string;
      };
    }
  }
}

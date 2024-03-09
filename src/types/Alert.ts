export interface Alert {
    id: string;
    userId: string;
    title: string;
    description: string;
    location: {
      latitude: number;
      longitude: number;
    };
    createdAt: Date;
  }
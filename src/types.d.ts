export interface Data {
    id: number;
    name: string;
    description: string;
    thumbnail: {
      path: string;
      extension: string;
    };
    comics: {
      available: number;
    };
    series: {
      available: number;
    };
    stories: {
      available: number;
    };
  }
  
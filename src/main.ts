export interface RandomType{
  x: number;
  name: string;
}


class Cars {
    carColor: string;
    carEngine: number;
  
    constructor(color: string, engine: number) {
      this.carColor  = color;
      this.carEngine = engine;
    }
  
    getCarColor(): string {
      return 'pink';
    }
  }
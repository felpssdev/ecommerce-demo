export type SneakerType = {
  id: string;
  name: string;
  estimatedMarketValue: number;
  quantity: number;
  image: {
    thumbnail: string;
  }
}

export type SneakerTypeNoQuantity = {
  id: string;
  name: string;
  estimatedMarketValue: number;
  quantity?: number;
  image: {
    thumbnail: string;
  }
}
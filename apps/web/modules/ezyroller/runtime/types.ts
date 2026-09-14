export interface ClarityQueue {
  (...args: unknown[]): void;
  q: unknown[][];
}

export type DataLayerEntry = Record<string, unknown>;

export interface AdcellTrackingApi {
  Tracking?: {
    track: () => void;
  };
}

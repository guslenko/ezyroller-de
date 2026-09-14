import type { CancellationFormParams } from '@plentymarkets/shop-api';

export interface UseEzyrollerCancellationFormState {
  loading: boolean;
}

export type SubmitEzyrollerCancellation = (params: CancellationFormParams) => Promise<string | null>;

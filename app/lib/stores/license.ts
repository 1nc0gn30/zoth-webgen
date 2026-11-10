import { atom } from 'nanostores';

export const kProLicense = 'zoth_pro_licensed';
export const kLicenseKey = 'zoth_license_key';

export const STRIPE_CHECKOUT_URL = 'https://buy.stripe.com/3cIfZg27PdKo2D64Ocfw40X';
export const SOLANA_RECEIVER = 'GG2eQbVh8ut1BK6j1A2tz7pSySdLpD38BgyEhGcxdXoK';
export const BITCOIN_RECEIVER = 'bc1p2dr247zklh8pnffak0ew7m82u2w8gx25ys28x7aavr95z674ydzsfw500t';

export const isProLicensedStore = atom<boolean>(initLicenseStore());
export const isPaywallModalOpenStore = atom<boolean>(false);
export const isActivationModalOpenStore = atom<boolean>(false);

function initLicenseStore(): boolean {
  return true;
}

export function activateLicense(key: string = 'OPEN_ACCESS'): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(kProLicense, 'true');
    localStorage.setItem(kLicenseKey, key);
  }

  isProLicensedStore.set(true);
  isPaywallModalOpenStore.set(false);
  isActivationModalOpenStore.set(false);
}

export function openPaywall(): void {
  isPaywallModalOpenStore.set(false);
}

export function closePaywall(): void {
  isPaywallModalOpenStore.set(false);
}

export function openActivationModal(): void {
  isActivationModalOpenStore.set(false);
}

export function closeActivationModal(): void {
  isActivationModalOpenStore.set(false);
}

export function openDePayCheckout(): void {
  if (typeof window !== 'undefined' && navigator.clipboard) {
    navigator.clipboard.writeText(SOLANA_RECEIVER).then(() => {
      alert(`Voluntary Solana tip address copied to clipboard:\n\n${SOLANA_RECEIVER}`);
    });
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  toasts: { message: string; type: 'success' | 'error' | 'info' }[] = [];

  showToast(message: string, type: 'success' | 'error' | 'info' = 'info') {
    this.toasts.push({ message, type });

    setTimeout(() => {
      this.toasts.shift();
    }, 3000); // Auto-hide after 3 seconds
  }
}

import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
})
export class NotFoundComponent {
  public messageError = {
    title: 'Sorry, this page is not available',
    text: 'Please verify the URL or check if it has been moved.',
    primaryButtonText: 'Go home',
  };

  private router = inject(Router);

  public goToHome(): void {
    this.router.navigate(['/']);
  }
}

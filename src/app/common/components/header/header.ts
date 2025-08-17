import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { UserInitials } from '../user-initials/user-initials';
import { AuthService } from '../../services/auth-service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [UserInitials, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  userName = signal<string>('Benny Thazhutha');
  router = inject(Router);
  authSer = inject(AuthService);
  userMenu = viewChild<ElementRef<HTMLButtonElement>>('user_menu');

  closePopover() {
    (this.userMenu()?.nativeElement as any).hidePopover();
  }

  login() {
    this.router.navigate(['/auth']);
  }

  logout() {
    (this.userMenu()?.nativeElement as any).hidePopover();
    this.authSer.logout();
  }
}

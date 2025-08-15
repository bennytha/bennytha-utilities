import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { UserInitials } from '../user-initials/user-initials';

@Component({
  selector: 'app-header',
  imports: [UserInitials],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  userName = signal<string>('Benny Thazhutha');
  userMenu = viewChild<ElementRef<HTMLButtonElement>>('user_menu');

  closePopover() {
    (this.userMenu()?.nativeElement as any).hidePopover();
  }
}

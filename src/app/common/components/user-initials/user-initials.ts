import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-user-initials',
  imports: [],
  templateUrl: './user-initials.html',
  styleUrl: './user-initials.scss'
})
export class UserInitials {
  userName = input.required<string | ''>();

  userNameInitials = computed(() => {
    const name = this.userName() ?? '';
    const words = name.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return words[0]?.[0]?.toUpperCase() ?? '';
  });
}

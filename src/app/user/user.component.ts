import {
  Component,
  computed,
  signal,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

// interface User  {
//   id: string;
//   name: string;
//   avatar: string;
// }

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

  // // get imagePath() {
  // //   return 'assets/users/' + this.selectedUser.avatar;
  // // }

  // onSelectUser() {
  //   const randomIndex = Math.floor( Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex])
  //   // this.selectedUser = DUMMY_USERS[randomIndex];
  // }
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Team } from '@interfaces/team';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const TeamsTableHeaders = ['Name', 'Country', 'Players'];

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teamsDb: AngularFireList<Team>;

  constructor(private db: AngularFireDatabase) {
    this.teamsDb = this.db.list('/teams', (ref) => ref.orderByChild('name'));
    console.log(this.teamsDb);
  }

  getTeams(): Observable<Team[]> {
    // Get a snap of a information
    return this.teamsDb.snapshotChanges().pipe(
      map((changes) =>
        changes.map((c) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }))
      )
    );
  }

  addTeam(teams: Team) {
    return this.teamsDb.push(teams);
  }

  editTeam(newTeamData: Team) {
    const $key = newTeamData.$key;
    delete newTeamData.$key;
    this.db.list('/teams').update($key, newTeamData);
  }

  deleteTeam(id: string) {
    this.db.list('/teams').remove(id);
  }
}

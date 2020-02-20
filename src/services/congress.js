import Http from './http';

export default class CongressService {
    static getPersons() {
        return Http.get('https://api.propublica.org/congress/v1/116/senate/members.json');
    }
}

import faker from 'faker';

import { Mappable } from './Map';

export default class Company implements Mappable {
    public companyName: string;
    public catchPhrase: string;
    public location: {
        lat: number;
        lng: number;
    };
    public color: string = 'red';

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        };
    }

    markerContent(): string {
        return `
        <div>
            <h4>Company Name: ${this.companyName}</h4>
            <p>Catchphrase: ${this.catchPhrase}</p>
        </div>`;
    }
}

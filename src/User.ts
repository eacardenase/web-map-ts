import faker from 'faker';

import { Mappable } from './Map';

export default class User implements Mappable {
    public name: string;
    public location: {
        lat: number;
        lng: number;
    };
    public color: string = 'red';

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        this.location = {
            lat: +faker.address.latitude(),
            lng: +faker.address.longitude(),
        };
    }

    markerContent(): string {
        return `<p>User Name: ${this.name}</p>`;
    }
}

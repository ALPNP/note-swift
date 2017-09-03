export class UserSpecific {
    eyes: string = null;
    weight: number = null;

    constructor(params?: any) {
        if (params) {
            this.weight = params['weight'] || this.weight;
            this.eyes = params['eyes'] || this.eyes;
        }
    }
}

export class User {
    name: string = null;
    id: number = null;
    email: string = null;
    genderTypeId: number = null;
    login: string = null;
    userSpecific: UserSpecific = new UserSpecific();

    constructor(params?: any) {
        if (params) {
            this.name = params['name'];
            this.id = params['_id'];
            this.email = params['email'];
            this.genderTypeId = params['genderTypeId'];
            this.login = params['login'];
        }
    }

    setUserSpecific(spec: UserSpecific): void {
        this.userSpecific = spec;
    }

    getUserSpecific(): UserSpecific {
        return this.userSpecific;
    }
}

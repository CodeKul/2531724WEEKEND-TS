import { GpsListener } from './gps';
export class Human implements GpsListener {

    location() {
        return 'Pune';
    }

    paces = () => {

    };

    health() : boolean | number | any {
        return true;
    }

    legs() : { [keyAny : string] : boolean} {
        return {xyz : true};
    }
}

let gps: GpsListener = {
    location() {
        return 'pune';
    }
};

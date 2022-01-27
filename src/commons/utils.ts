export class Utils {
    static assertHasProperty(obj, prop): boolean {
        let has: boolean = (obj[prop] === null || obj[prop] === undefined);
        if (has == false) {
            throw new Error(prop);
        }
        return has;
    }
}
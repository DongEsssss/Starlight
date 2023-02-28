abstract class ApiLoader {
    static fromObject<T extends ApiLoader>(this: { new(): T }, obj: object): T {
        return Object.assign(new this(), obj);
    }
}

export class ObjectLoader extends ApiLoader{
}
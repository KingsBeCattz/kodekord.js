import { TypedEmitter } from 'tiny-typed-emitter'

export interface ClientOptions {
    /**
     * Default allowed mentions
     * @default { everyone: false, repliedUser: true, roles: true, users: true}
     */
}

export class Client extends TypedEmitter<any> {

}
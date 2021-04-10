declare module "teamspeak-query" {
    type Parameters = {[key: string]: string};
    type Arguments = string;

    declare interface QueryClient {
        async send(command: string, params?: Parameters, args: Arguments): Promise<void>;
        async disconnect(): Promise<void>;
    }

    export declare class Base implements QueryClient {
        async send(command: string, params?: Parameters, args: Arguments): Promise<void>;
        async disconnect(): Promise<void>;
    }

    export declare class Raw implements QueryClient {
        async send(command: string, params?: Parameters, args: Arguments): Promise<void>;
        async disconnect(): Promise<void>;
    }

    export declare class SSH implements QueryClient {
        async send(command: string, params?: Parameters, args: Arguments): Promise<void>;
        async disconnect(): Promise<void>;
    }
}

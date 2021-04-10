import * as TeamSpeakQuery from 'teamspeak-query';

export interface ClientOptions {
    authType?: 'raw' | 'ssh';
    host?: string;
    port?: number;
}

export class Client {
    private query: TeamSpeakQuery.Base;

    constructor(
        private options: ClientOptions
    ) {
        if (options.authType === 'ssh') {
            this.query = new TeamSpeakQuery.Raw();
        } else {
            this.query = new TeamSpeakQuery.Raw();
        }
    }

    async disconnect(): Promise<void> {
        await this.query.disconnect();
    }
}

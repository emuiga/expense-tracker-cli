import { PrismaClient } from '@prisma/client/index.js';
import path from 'node:path';
import os from 'node:os';
import process from 'node:process';

const databaseUrl = () => {
    if (process.env.NODE_ENV == 'development') {
        return 'file:./prisma/dev.db';
    }

    const dbDir = path.join(os.homedir(), '.expense-tracker-cli');
  return `file:${path.join(dbDir, 'data.db')}`;

};

export const prisma = new PrismaClient({
        datasourceUrl: databaseUrl(),
});

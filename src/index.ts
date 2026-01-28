#!/usr/bin/env node

import { Command } from 'commander';
import process from 'node:process';

const program = new Command();

program
    .name('expense')
    .description('tool to track daily expenses')
    .version('1.0.0');
    
program
    .command('add')
    .description('Add new expense')
    .action(() => {
        console.log('Add expense')
    });

program.parse(process.argv);
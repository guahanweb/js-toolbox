import { Command } from '../../command';
import { init as projectInit } from './init';

export const init: Command = (program) => {
    const command = program.command('project');

    command
        .command('init')
        .description('initialize a new JavaScript project')
        .action(projectInit);
};

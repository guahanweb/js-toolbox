import { Command } from '../../command';
import { init as lintInit } from './init';

export const init: Command = (program) => {
    const command = program.command('lint');

    command
        .description('Execute global linting against a project')
        .action(lintInit);
};

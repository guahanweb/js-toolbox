import path from 'path';
import nodePlop from 'node-plop';

export async function init() {
    const plop = await nodePlop(path.join(__dirname, 'plopfile.ts'));

    const project = plop.getGenerator('project');
    const projectDetails = await project.runPrompts();
    const [scope, name] = projectDetails.packageName.split('/');
    const results = await project.runActions({
        ...projectDetails,
        scope,
        name,
    });

    console.log(
        `Project initialization complete: ${projectDetails.packageName}`
    );
    console.log(`\tgenerated ${results.changes.length} files`);
    if (results.failures.length) {
        console.error(`\tencountered ${results.failures.length} failures`);
    }
}

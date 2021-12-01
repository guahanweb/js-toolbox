import path from 'path';
import { Question } from 'inquirer';
import { packageType, packageName } from './prompts';

const prompts: Question[] = [packageType, packageName];

// define an array of files based on relative position
// we will prefix them with the right path whe we load
const requiredFiles = {
    webpack: [
        {
            path: 'webpack.config.ts',
            templateFile: path.join('webpack', 'webpack.config.ts.hbs'),
        },
        {
            path: path.join('static', 'index.html'),
            templateFile: path.join('webpack', 'static', 'index.html.hbs'),
        },
        {
            path: 'tsconfig.webpack.json',
            templateFile: path.join('webpack', 'tsconfig.webpack.json.hbs'),
        },
        {
            path: '.npmignore',
            templateFile: '.npmignore.hbs',
        },
        {
            path: '.eslintrc.js',
            templateFile: '.eslintrc.js.hbs',
        },
        {
            path: path.join('src', 'index.tsx'),
            templateFile: path.join('webpack', 'src', 'index.tsx.hbs'),
        },
        {
            path: 'package.json',
            templateFile: path.join('webpack', 'package.json.hbs'),
        },
        {
            path: 'tsconfig.json',
            templateFile: 'tsconfig.json.hbs',
        },
        {
            path: 'tslint.json',
            templateFile: 'tslint.json.hbs',
        },
        {
            path: 'README.md',
            templateFile: 'README.md.hbs',
        },
    ],
} as any;

function getAddFileActions(
    packageType: string,
    location: string,
    templatesDirectory: string
) {
    const fileList = requiredFiles && requiredFiles[packageType];
    if (!fileList || !fileList.length) {
        // no configuration for this package type
        return [];
    }

    return fileList.map((f: any) => {
        return {
            type: 'add',
            path: path.join(location, f.path),
            templateFile: path.join(templatesDirectory, f.templateFile),
            abortOnFail: true,
        };
    });
}

const actions = (data: any) => {
    const templatesDirectory: string = path.join(__dirname, 'templates');
    const location: string = path.join(
        process.cwd(),
        'packages',
        '{{dashCase name}}'
    );

    // set up base actions for our types
    const actions: any[] = getAddFileActions(
        data.packageType,
        location,
        templatesDirectory
    );

    return actions;
};

// at this point, Plop doesn't export generator typings
export const generator = {
    description: 'Add a TypeScript-based package',
    prompts,
    actions,
} as any;

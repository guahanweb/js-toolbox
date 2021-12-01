export const packageType = {
    type: 'list',
    name: 'packageType',
    message: 'What type of package are you creating?',
    choices: ['basic', 'webpack', 'esbuild'],
    default: 1,
};

const invalidPackageName =
    'Invalid package name. (See https://github.com/npm/validate-npm-package-name)';
const scopedPackagePattern =
    /@[a-z0-9]{1}[a-z0-9]{1,}\/[a-z]{1}[a-z0-9-]{1,}[a-z0-9]{1}$/;

const validatePackageName = (value: string) => {
    return scopedPackagePattern.test(value) ? true : invalidPackageName;
};

export const packageName = {
    type: 'input',
    name: 'packageName',
    suffix: ' (scope required, dash separated, e.g. @foobar/my-package)',
    message: 'What is the name of the package?',
    validate: validatePackageName,
};

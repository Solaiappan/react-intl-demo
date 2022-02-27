export const transformLocalizationJSON = (modules) => {
    debugger;
    const result = {};
    Object.keys(modules).forEach(module => {
        Object.keys(modules[module]).forEach(key => {
            result[`${module}.${key}`] = modules[module][key];
        });
    });
    return result;
};

const allModules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
});

export const importAll = (groupName) => {
    const images = [];

    for (const path in allModules) {
        if (path.includes(`/assets/${groupName}/`)) {
            images.push(allModules[path]);
        }
    }

    return images;
};
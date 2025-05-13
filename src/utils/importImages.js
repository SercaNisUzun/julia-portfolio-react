const allModules = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
});

export const importAll = (groupName) => {
    // Önce ilgili yolları filtrele
    const filtered = Object.entries(allModules)
        .filter(([path]) => path.includes(`/assets/${groupName}/`))
        // Dosya adına göre sırala (örneğin 1.jpg, 2.jpg ...)
        .sort(([a], [b]) => {
            const getFileName = (path) => path.split('/').pop().split('.')[0];
            return Number(getFileName(a)) - Number(getFileName(b));
        });

    // Sadece modülleri (yani import edilen resimleri) döndür
    return filtered.map(([_, mod]) => mod);
};

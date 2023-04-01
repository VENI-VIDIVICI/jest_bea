export function filterIgnoredCommands(files: string[]) {
    const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
    return files.filter(file => {
        return !excludes.some(exclude => file.includes(exclude))
    })
}
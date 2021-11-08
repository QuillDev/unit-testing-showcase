export const processJSONNew = (data: string) => {
    try {
        return JSON.stringify(JSON.parse(data), null, 2)
    } catch (ignored) {
        return 'invalid json submitted'
    }
}
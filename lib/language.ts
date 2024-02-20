const LANGUAGE = [
    { name: '繁體中文', file: 'zh-tw' },
    { name: 'English', file: 'en' },
    { name: '日文', file: 'jp' },
    { name: '簡體中文', file: 'zh-cn' },
]
export const setlang = LANGUAGE.map((item) => item.name).sort();

export function langfilename(text: string | null) {
    if (text) {
        const name = LANGUAGE.find((item) => item.name === text)
        return name?.file
    }
    return null
}
import {signal} from  "@preact/signals-react"

//merupakan global state(wajib menggukana signal)
export const sUser = signal<{[key: string]: any} | null>(null)
export interface Map {
    imports?: [string] | never[], 
    animations?: { [key: string]: { [key: string]: string[] } },
    fonts?: { [key: string]: { [key: string]: Set<string> | string } },
    medias?: { [key: string]: { [key: string]: string[] } },
    propertyCounts?: { [key: string]: number }
}
// Generated by https://quicktype.io

export interface IApplication {
    author: string;
    category: string;
    title: string;
    url: string;
    maintainer: string;
    repo: string;
    readme: string | undefined;
    versions: Map<string, IApplicationVersionListing> | undefined;
    id: string;
}
export interface IApplicationVersionListing {
    oarURL: string;
    version: string;
}
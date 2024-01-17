declare module "*.jpg" {
    const path: string;
    export default path;
}

declare module "*.png" {
    const path: string;
    export default path;
}

declare module "*.svg" {
    // const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    const path: string;
    export default path;
}

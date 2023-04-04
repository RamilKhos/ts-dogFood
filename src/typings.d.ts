declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module "*.png" {
    const value: any;
    export = value;
 }

// declare module "*.png";
// declare module "*.svg";
// declare module "*.jpeg";
// declare module "*.jpg";
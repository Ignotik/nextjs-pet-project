declare module "*.scss" {
  const content: {
    [className: string]: string;
  };
  export = content;
}
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const value: HTMLImageElement;
  export default value;
}

declare module "*.jpg" {
  const value: HTMLImageElement;
  export default value;
}

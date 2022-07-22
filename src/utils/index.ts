interface OpenInNewWindowOptions {
   internal: boolean;
   width?: number;
   height?: number;
   left?: number;
   top?: number;
}

export function openInNewWindow(url: string, options: OpenInNewWindowOptions): void {
   const windowFeatures = `width=${options.width ?? 500},height=${
      options.height ?? 700
   },left=${options.left ?? 10},top=${options.top ?? 10}`;

   if (options.internal)
      window.open(process.env.NEXT_PUBLIC_DOMAIN + url, "", windowFeatures);
   else window.open(url, "", windowFeatures);
}

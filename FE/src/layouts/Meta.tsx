import Head from "next/head";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import type * as IMeta from "@/interfaces/layouts/meta.interface";
import { AppConfig } from "@/utils/AppConfig";

const Meta = (props: IMeta.IMetaProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="keywords"
          key="keywords"
          content={`${props?.keywords || AppConfig.keywords}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="robots"
          content="index, follow , max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <title>{props?.title || AppConfig.title}</title>
        <meta name="title" content={`${props?.title || AppConfig.title}`} />
        <link href={`${window?.location?.href}`} rel="canonical" />
        <link rel="preconnect" href={`${window?.location?.href}`} />
        <meta
          name="description"
          content={`${props?.description || AppConfig.description}`}
        />
        <meta
          property="og:title"
          content={`${props?.title || AppConfig.title}`}
        />
        <meta
          property="og:description"
          content={`${props?.description || AppConfig.description}`}
        />
        <meta property="og:url" content={`${window?.location?.href}`} />
        <meta
          property="og:image"
          content="https://teamsport-vendure-test.ferrari.aegona.work/assets/source/f5/caulong.png"
        />
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:locale:alternate" content="vi_VN" />
        <meta
          property="og:site_name"
          content={`${props?.title || AppConfig.title}`}
        />
        <meta name="geo.region" content="VN" />
        <meta name="geo.placename" content="Buon Ma Thuot" />
        <meta name="geo.position" content="12.679683;108.044737" />
        <meta name="ICBM" content="12.679683, 108.044737" />
        <meta
          name="twitter:site"
          content={`${props?.title || AppConfig.title}`}
        />
        <meta
          name="twitter:title"
          content={`${props?.title || AppConfig.title}`}
        />
        <meta property="og:image" />
        <meta
          name="twitter:card"
          content="https://teamsport-vendure-test.ferrari.aegona.work/assets/source/f5/caulong.png"
        />
        <meta
          name="twitter:description"
          content={`${props?.description || AppConfig.description}`}
        />
        <meta httpEquiv="x-ua-compatible" content="ie=edge chrome=1" />
        <meta name="revisit-after" content="1 days" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta property="og:type" content="website" />
        <link
          rel="apple-touch-icon"
          href={`${router.basePath}/logo-url.ico`}
          key="apple"
        />
        <link
          rel="icon"
          href={`${router.basePath}/logo-url.ico`}
          key="favicon"
        />
      </Head>
      <NextSeo
        title={props?.title || AppConfig.title}
        description={props?.description || AppConfig.description}
        canonical={window?.location?.href}
        openGraph={{
          title: props?.title || AppConfig.title,
          description: props?.description || AppConfig.description,
          url: window?.location?.href,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };

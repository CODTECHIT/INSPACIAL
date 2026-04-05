import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
}

const DEFAULT_IMAGE = "https://www.inspacialdesigns.com/hero/hero-living.jpg";
const BASE_URL = "https://www.inspacialdesigns.com";

export const SEO = ({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  url = BASE_URL,
  type = "website",
  author = "Saif - Inspacial Designs",
}: SEOProps) => {
  const siteName = "INSPACIAL DESIGNS";
  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | Premium Luxury Interior Design`;

  const defaultDescription =
    "Inspacial Designs is a premium architectural planning and interior design studio specializing in bespoke residential and luxury spaces. Transform your vision into reality with 150+ luxury projects completed.";

  const defaultKeywords =
    "interior design, architectural planning, luxury interior design, premium home design, bespoke residential design, luxury spaces, home decor, office design, villa interior, apartment interior, 3D visualization, space planning, custom furniture design, designer lighting, material selection, renovation consultation, luxury remodeling, facade design, interior styling, modern interior, contemporary design, Mumbai interior designer, luxury interior designer";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title || siteName} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@InspacialDesigns" />
      <meta name="twitter:creator" content="@InspacialDesigns" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title || siteName} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
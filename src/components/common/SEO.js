import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoData } from '../../data';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url,
  type = 'website',
  noindex = false 
}) => {
  const seoTitle = title ? `${title} | ${seoData.author}` : seoData.title;
  const seoDescription = description || seoData.description;
  const seoImage = image || seoData.image;
  const seoUrl = url || seoData.siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={keywords || seoData.keywords} />
      <meta name="author" content={seoData.author} />
      <link rel="canonical" href={seoUrl} />
      
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={seoData.author} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seoData.twitterHandle} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#f97316" />
      <meta name="msapplication-TileColor" content="#f97316" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    </Helmet>
  );
};

export default SEO;
import { useEffect } from 'react';

const BASE_TITLE = 'Torrtus IT Services';

const setMeta = (name, content, attr = 'name') => {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setCanonical = (url) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
};

export const useSEO = ({ title, description, canonical }) => {
  useEffect(() => {
    document.title = title ? `${title} | ${BASE_TITLE}` : `${BASE_TITLE} | AI Automation & SaaS Development India`;

    if (description) {
      setMeta('description', description);
      setMeta('og:description', description, 'property');
      setMeta('twitter:description', description);
    }

    if (title) {
      const fullTitle = `${title} | ${BASE_TITLE}`;
      setMeta('og:title', fullTitle, 'property');
      setMeta('twitter:title', fullTitle);
    }

    if (canonical) {
      setCanonical(canonical);
      setMeta('og:url', canonical, 'property');
    }
  }, [title, description, canonical]);
};

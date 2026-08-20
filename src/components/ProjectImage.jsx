import React, { useState } from 'react';

export default function ProjectImage({ src, alt, loading = 'lazy' }) {
  const [error, setError] = useState(false);

  const initialsFromAlt = (text) => {
    if (!text) return '';
    return text.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
  };

  if (!src || error) {
    return (
      <div className="expertise-media-fallback" role="img" aria-label={alt || 'project image'}>
        <div className="expertise-media-fallback-inner">{initialsFromAlt(alt) || 'PR'}</div>
      </div>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img src={src} alt={alt} loading={loading} onError={() => setError(true)} className="expertise-media-img" />
  );
}

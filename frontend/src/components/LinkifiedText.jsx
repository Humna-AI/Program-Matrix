import React from 'react';
import { ExternalLink } from 'lucide-react';

/**
 * LinkifiedText component
 * Automatically detects URLs (http, https, www) in strings and converts them
 * into styled, clickable links opening securely in a new tab.
 */
export default function LinkifiedText({ text, className = '', showIcon = true }) {
  if (!text) return null;

  // Regex to match URLs (http://, https://, or www.)
  const urlRegex = /(https?:\/\/[^\s<]+|www\.[^\s<]+)/gi;

  const parts = [];
  let lastIndex = 0;
  let match;

  // Clone regex to use exec with global flag
  const regex = new RegExp(urlRegex);

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    let rawUrl = match[0];

    // Push preceding plain text if any
    if (matchIndex > lastIndex) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex, matchIndex),
      });
    }

    // Strip trailing punctuation often typed at the end of sentences
    let trailingPunctuation = '';
    const punctuationMatch = rawUrl.match(/[.,;:!?)]+$/);
    if (punctuationMatch) {
      trailingPunctuation = punctuationMatch[0];
      rawUrl = rawUrl.substring(0, rawUrl.length - trailingPunctuation.length);
    }

    let href = rawUrl;
    if (rawUrl.toLowerCase().startsWith('www.')) {
      href = `https://${rawUrl}`;
    }

    parts.push({
      type: 'link',
      content: rawUrl,
      href,
    });

    if (trailingPunctuation) {
      parts.push({
        type: 'text',
        content: trailingPunctuation,
      });
    }

    lastIndex = matchIndex + match[0].length;
  }

  // Push remaining text
  if (lastIndex < text.length) {
    parts.push({
      type: 'text',
      content: text.substring(lastIndex),
    });
  }

  return (
    <span className={`break-words ${className}`}>
      {parts.map((part, index) => {
        if (part.type === 'link') {
          return (
            <a
              key={index}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              title={`Open ${part.href}`}
              className="inline-flex items-center gap-0.5 text-indigo-400 hover:text-indigo-300 underline underline-offset-2 font-medium hover:brightness-125 transition duration-150 group/link"
            >
              <span className="break-all">{part.content}</span>
              {showIcon && (
                <ExternalLink className="h-3 w-3 inline-block shrink-0 opacity-80 group-hover/link:opacity-100 transition-opacity" />
              )}
            </a>
          );
        }
        return <React.Fragment key={index}>{part.content}</React.Fragment>;
      })}
    </span>
  );
}

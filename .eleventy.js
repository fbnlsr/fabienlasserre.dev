import syntaxHighlight from '@11ty/eleventy-plugin-syntaxhighlight';
import readingTime from 'eleventy-plugin-reading-time';
import emojifyPlugin from 'eleventy-plugin-emojify';
import pluginRss from '@11ty/eleventy-plugin-rss';
import htmlmin from 'html-minifier-next';
import markdownIt from 'markdown-it';
import { I18nPlugin } from '@11ty/eleventy';
import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/img/');
  eleventyConfig.addPassthroughCopy('./src/js/');
  eleventyConfig.addPassthroughCopy('./src/css/');
  eleventyConfig.addPassthroughCopy('./src/fonts/');
  eleventyConfig.addPassthroughCopy('./src/_redirects');
  eleventyConfig.addPassthroughCopy({'./src/img/favicon': '/'});

  eleventyConfig.addWatchTarget('./src/_assets/scss');
  eleventyConfig.addWatchTarget('./src/_assets/js');

  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.addPlugin(emojifyPlugin);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: 'fr',
    errorMode: 'allow-fallback'
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ["avif", "webp", "jpeg"],
    widths: ["auto"],

    sharpAvifOptions: {
      quality: 100,
      effort: 9,
    },

    sharpWebpOptions: {
      quality: 100,
      effort: 6,
    },

    sharpJpegOptions: {
      quality: 100,
      mozjpeg: true,
    },

    sharpPngOptions: {
      quality: 100,
      compressionLevel: 9,
    },
  });

  // Markdown filter for applying to the "description" inside projects front matter
  const markdownItOptions = {
    html: true,
    breaks: true,
    linkify: false
  };
  const md = markdownIt(markdownItOptions);
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addFilter('markdownify', (markdownString) =>
    md.render(markdownString)
  );

  // Date filter for blog permalinks
  eleventyConfig.addFilter('blogdate', (date) => {
    function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    const postDate = new Date(date);

    return (
      postDate.getUTCFullYear() +
      '-' +
      pad(postDate.getUTCMonth() + 1) +
      '-' +
      pad(postDate.getUTCDate())
    );
  });

  // Date filter for humans
  eleventyConfig.addShortcode('humandate', (date, locale) => {
    const postDate = new Date(date);

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return postDate.toLocaleString(locale, options);
  });

  // Blogimg shortcode for... well, blog images
  eleventyConfig.addShortcode('blogimg', (date, src, alt = 'Image') => {
    if (date && src) {
      const renderedAlt = md.renderInline(alt);
      const plainAlt = renderedAlt.replace(/<[^>]*>/g, '');
      const imageSrc = `/img/blog/${date}/${src}`;

      let str = `<div class="is-blog-img"><a href="${imageSrc}" target="_blank" rel="noopener noreferrer"><img src="${imageSrc}" alt="${plainAlt}" width="720"></a>`;

      if (alt !== 'Image') {
        str += `<p class="is-blog-img-title">${renderedAlt}</p>`;
      }

      str += `</div>`;

      return str;
    }
  });

  eleventyConfig.addTransform('htmlmin', function(content, outputPath) {

    if (outputPath !== false && outputPath.endsWith('.html')) {

      return htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
    }

    return content;
  });

  return {
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    templateFormats: ['md', 'njk', 'html', '11ty.js'],
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};

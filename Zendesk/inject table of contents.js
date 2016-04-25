/**
 * Inject TOC above Zendesk Help Center Article
 * (once there are more than 2 article headings)
 * @license MIT License
 * @author Rutger Meekers [rutger@meekers.eu]
 */
if ($('.article-body span.wysiwyg-font-size-x-large').length > 2) {

  // Create an array to store the TOC
  var toc = [];

  // Find all the headers, create a list from them and add name attributes
  $('.article-body span.wysiwyg-font-size-x-large').replaceWith(function() {
    // Get the heading text
    var headingText = $.trim($(this).text());
    // Add the text to the menu
    toc.push(headingText);
    return '<a name="' +
            headingText +
            '" class="wysiwyg-font-size-x-large article-heading-link">' +
            headingText +
            '</a>';
  });

  // Create the TOC placeholder
  $('.article-body').prepend('<div class="article-table-of-contents"><span class="wysiwyg-font-size-large">In This Article:</span><ol></ol></div>');

  // Add the TOC to the placeholder
  $(toc).each(function(index) {
    $('.article-table-of-contents ol')
      .append('<li><a href="#' + toc[index] + '">' + toc[index] + '</a></li>');
  });
}

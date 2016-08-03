//= require filter
//= require support/link_helpers

describe('filter', function () {
  var links = createLinks();
  var unreadLink = createNewLink({title: "unRead", user_id: 1, read: false});
  var readLink1 = createNewLink({title: "Read1", user_id: 1, read: true});
  var readLink2 = createNewLink({title: "Read2", user_id: 1, read: true});
  links.appendChild(unreadLink);
  links.appendChild(readLink1);
  links.appendChild(readLink2);

  it('can remove all unread links', function () {
    var filteredLinks = filterByReadStatus();
    assert.equal($(filteredLinks).find('.unread').length, 0);
    assert.equal($(filteredLinks).find('.read').length, 1);
  });

  it('can remove all read links', function () {
    var filteredLinks = filterLinks(links, 'unread');
    assert.equal($(filteredLinks).find('.unread').length, 2);
    assert.equal($(filteredLinks).find('.read').length, 0);
  });
});

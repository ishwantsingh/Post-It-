export default function orderedPost(posts, filterByType) {
  function compare(a, b) {
    if (a.upvotes > b.upvotes) return -1;
    if (a.upvotes < b.upvotes) return 1;
    return 0;
  }
  var func = x => {
    return filterByType(x);
  };
  function myFunction2(posts) {
    let orderedPost = posts.sort(compare);
    console.log("working", orderedPost);
    return (
      orderedPost &&
      orderedPost.map(post => {
        return func(post);
      })
    );
  }
  return myFunction2(posts);
}

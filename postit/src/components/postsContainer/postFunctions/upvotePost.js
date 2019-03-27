export default function upvotePost(event) {
  const postLink = event.currentTarget.parentElement.parentElement.parentElement
    .querySelector("a")
    .href.split("/");
  const currentPostId = postLink[postLink.length - 1];
  console.log(currentPostId);
  return currentPostId;
}

(() => {
 async function unfollowAll() {
  const buttons = document.querySelectorAll('button.follow.is-following') || [];

  for (const button of buttons) {
   const name = button.parentElement.querySelector('.follows-recommendation-card__name',).innerText;
   console.log('Unfollowed ', name);

   window.scrollTo(0, button.offsetTop - 260);
   button.click();
   await new Promise((resolve) => setTimeout(resolve, 100));
  }
 }

 async function runUnfollowAll() {
  await unfollowAll();
  window.scrollTo(0, document.body.scrollHeight);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const buttons = document.querySelectorAll('button.follow.is-following') || []; 

  if (buttons.length) runUnfollowAll();
 }
 runUnfollowAll();
})();

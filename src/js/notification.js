import { error, Stack } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

defaults.maxTextHeight = null;
defaults.delay = 1000;

function myNotice() {
  const myNotice = error({
      text: "Too many matches found. Please, enter a more specific query!",
      stack: new Stack({
      dir1: 'up',
  })
}); 
}

function myError() {
  const myNotice = error({
      text: "Incorrect input! Please, enter a valid value.",
      stack: new Stack({
      dir1: 'up',
  })
}); 
}

export { myNotice, myError };
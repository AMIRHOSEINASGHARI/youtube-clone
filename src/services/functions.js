const reduceTitle = (title) => {
  const splitedTitle = title.split(" ");
  if (splitedTitle.length > 3) {
    return `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]} ${splitedTitle[3]}...`;
  } else {
    return title;
  }
};

const setViews = (view) => {
  const newView = Math.floor(view / 1000);
  if (newView >= 1) {
    return `${newView}K`;
  } else {
    return view;
  }
};

export { reduceTitle, setViews };

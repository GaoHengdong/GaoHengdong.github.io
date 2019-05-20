import blogList from "../datas/blogList";

//to handle with header menu
export const clickEmpty = () => {
  return {
    type: "CLICK_EMPTY"
  };
};
export const clickMenu = () => {
  return {
    type: "CLICK_MENU"
  };
};
export const clickToggleBtn = checked => {
  return {
    type: "CLICK_TOGGLEBTN",
    payload: checked
  };
};

//to handle with blog list
export const fetchBlogList = (tagName = "all") => {
  return {
    type: "FETCH_BLOGLIST",
    payload: { tagName, blogList }
  };
};
export const nextPage = () => {
  return {
    type: "NEXT_PAGE"
  };
};
export const previousPage = () => {
  return {
    type: "PREVIOUS_PAGE"
  };
};

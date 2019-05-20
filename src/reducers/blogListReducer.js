import { pageConfig } from "../datas/config";

const INITIAL_STATE = {
  blogList: [],
  page: 1,
  pageNum: 1,
  tag: "all"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_BLOGLIST":
      var newlist;
      var newpage = null;
      if (action.payload.tagName === "all") {
        newlist = action.payload.blogList;
      } else {
        newpage = { page: 1 };
        newlist = action.payload.blogList.filter(item =>
          item.tags.includes(action.payload.tagName)
        );
      }

      return {
        ...state,
        blogList: [...newlist].reverse(),
        pageNum: Math.ceil(newlist.length / pageConfig.numPerPage),
        tag: action.payload.tagName,
        ...newpage
      };
    case "NEXT_PAGE":
      return { ...state, page: state.page + 1 };
    case "PREVIOUS_PAGE":
      return { ...state, page: state.page - 1 };

    default:
      return state;
  }
};

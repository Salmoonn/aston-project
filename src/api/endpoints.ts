const Endpoints = {
  IMAGE: {
    IMG_ID: "/i/",
    AVATAR_ID: "/a/",
    BANNER_ID: "/b/",
  },
  COLLECTION: {
    TOP_COLLECTION: "/topcollections",
    GET_COLLECTION: "/c/",
  },
  SIGN_UP: "/signup",
  AUTH: {
    LOGIN: "/login",
    PROFILE: "/profile",
    REFRESH: "/refresh",
    LOGOUT: "/logout",
  },
  PROFILE: {
    GET_PROFILE: "/getprofile",
  },
  ITEM: {
    GET_ITEM: "/item",
  },
  SEARCH: {
    SEARCH_ITEM: "/searchitem",
    SEARCH_COLLECTION: "/searchcollection",
  },
  FAVORITES: {
    ADD_TO_FAVORITES: "/favorites",
  },
};

export default Endpoints;

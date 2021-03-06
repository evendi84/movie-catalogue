import NowPlaying from "../views/pages/now-playing";
import Upcoming from "../views/pages/upcoming";
import Detail from "../views/pages/detail";

const routes = {
    '/': NowPlaying, /* Default page */
    '/now-playing': NowPlaying,
    'upcoming': Upcoming,
    'detail': Detail,
};

export default routes;
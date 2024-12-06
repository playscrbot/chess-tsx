import React from 'react';

type LayoutProps = {
    Content: React.ComponentType;
};

const Layout: React.FC<LayoutProps> = ({ Content }) => {
  return (
    <div className="container">
        <div className="app-logo">
            <a href="https://github.com/kunalvirk/chess-tsx" target='_blank'><img src={'/assets/images/app-icon.png'} alt="" /></a>
            <span>Chess TSX</span>
        </div>
        <div className="flex">
            <div className="featured-img">
                <img src="https://c4.wallpaperflare.com/wallpaper/682/896/1009/minimalism-chess-pawns-crown-wallpaper-preview.jpg" alt="" />
            </div>
            <div className="content">
                <Content />
            </div>
        </div>
    </div>
  );
};

export default Layout;
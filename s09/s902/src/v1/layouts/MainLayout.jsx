export default function MainLayout({ children }) {

    return (
        <div className="main-layout">
            <div className="nav-layout">
                <div className="nav-header">
                    <div className="nav-logo">
                        <span>Logo</span>
                    </div>
                    <div className="nav-title">
                        <span>Title</span>
                    </div>
                    <div className="nav-info">
                        <span>User Info</span>
                    </div>
                </div>
                <div className="nav-subheader">
                    <span>Nav icons / sections</span>
                </div>
            </div>
            <div className="home-layout">
                {children}
            </div>
        </div>
    )

}
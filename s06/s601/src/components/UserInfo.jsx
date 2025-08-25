import { useSelector } from "react-redux"

export default function UserInfo() {

    const user = useSelector(state => state.users.user)
    const isSignedIn = useSelector(state => state.users.isSignedIn)

    if (!isSignedIn) return (
        <div className="user-info-error">
            <span><i className="fas fa-bomb"></i></span>
            <span>Error 704</span>
        </div>
    )

    return (
        <div
            className="user-info-container"
        >
            <img 
                className="user-info-picture"
                src={user.picture} 
                alt="" 
            />
            <div>
                <div>
                    <span>{user.fullName}</span>
                </div>
                <div className="user-info-email">
                    <span>{user.email}</span>
                </div>
            </div>
        </div>
    )

}
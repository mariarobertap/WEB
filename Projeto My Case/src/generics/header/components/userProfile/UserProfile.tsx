import { UserProfileButton } from './UserProfileBase'
import ProfileImage from "../../../../images/profilePicture/profilePicture.png"
import { Link } from 'react-router-dom'

function UserProfile() {
    return (
        <>
            <Link to="/inventory">
                <UserProfileButton src={ProfileImage} />
            </Link>
        </>
    )
}

export default UserProfile

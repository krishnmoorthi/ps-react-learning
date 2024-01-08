import './User.css';

const User = ({ userData }) => {
    const { name, subject } = userData;

    return (
        <div className="User">
            <h3>{subject}</h3>
            <h4>{name}</h4>
        </div>
    );
}

export default User;

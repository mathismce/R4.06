'use Client';
import "../base.css"

export default function Card(user) {
    return (
        <div className="gallery__pic">
            <img class="gallery__image" src={user.image} alt="people" />
            <div className="gallery__div">
                <img src="./bgshapes.svg" alt="avatar"/>
                <div className="gallery__txt">
                    <h2>{user.name}</h2>
                    <h3 className="gallery__work">{user.profession}</h3>
                </div>
                
            </div>
        </div>
    )
}


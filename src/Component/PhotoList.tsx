import React, {FC} from "react";
import {IPhoto} from "../Types/interfaces";

interface PhotoListProps {
    photos: IPhoto[]
}

export const PhotoList: FC<PhotoListProps> = ({photos}) => {
    return (
        <div className='all-photo-block'>
            {
                photos.map(photo=>
                    <div
                        className='photo-block'
                        key={photo.id}
                    >
                        <img src={photo.largeImageURL} alt=""/>
                    </div>)
            }
        </div>
    )
}
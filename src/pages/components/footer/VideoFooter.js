import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
  return (
    <div className='videoFooter'>
        <div className='VideoFooter__text'>
            <h3>@{name}</h3>
            <p>{description}</p>
            <div className='videoFooter__music'>
                <MusicNoteIcon className='videoFooter__icon'/>
                <div className='videoFooterMusic__text'>
                    <p>{music}</p>
                </div>
                
            </div>
        </div>
        <img  
            className='videoFooter__record'       
            alt='Imagem de vinil girando' 
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
        />
    </div>
  )
}

export default VideoFooter
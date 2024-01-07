import React from 'react'

const readItem = ({ image,  text, title}) => {
  return (
    <div className='read_item_list'>
            <div className='images_readitem'>
                <Link> <img src={image} alt="" /></Link>
            </div>
            <div className="readitem_text_title">
                <h3 className='readItem_title'>{title}</h3>
                <p className='readItem_desc'>{text}</p>
                <button className="read_blue-btn">Read Now</button>
            </div>
        </div>
  )
}

export default readItem
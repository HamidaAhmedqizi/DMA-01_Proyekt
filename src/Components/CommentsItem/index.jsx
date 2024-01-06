import React from 'react';

import Icon from '../../Images/Stars.png'
import './style.css'




const CommentItem = ({ image, desc, name }) => {
  return (
    <div className="comment-list">
      <div className='name_image_stars_cont'>
        <div className='image-cont'>
          <img src={image} alt={name} />
        </div>
        <div className='name_image_cont'>
          <h2 className='item_h2_name'>{name}</h2>
          <img src={Icon} alt="icon" />
        </div>
      </div>

      <p className='com_item_desc'>{desc}</p>
    </div>
  );
};
export default CommentItem
// const CommentsComponent = () => {
//   return (
//     <div className="comments-component">
//       <h2>Comments</h2>
//       <CommentList />
//     </div>
//   );
// };

// export default CommentsComponent;

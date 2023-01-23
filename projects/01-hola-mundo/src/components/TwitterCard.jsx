import './TwitterCard.css'
import { useState } from 'react'

export default function TwitterCard() {
  const [isFollowing, setIsFollowing] = useState(false)
  const onFollow = () => setIsFollowing(!isFollowing)

  const className = isFollowing ? 'tw-followCard-followBtn following' : 'tw-followCard-followBtn'
  const followingText = isFollowing ? 'Following' : 'Follow'

  return (
    <a href="#" className="tw-followCard">
      <img className="tw-followCard-avatar" src="https://unavatar.io/midudev" alt="Profile Picture" />
      <div className="tw-followCard-text">
        <strong className="tw-followCard-text-fullname">Miguel Ángel Durán</strong>
        <span className="tw-followCard-text-username">@midudev</span>
      </div>
      <button onClick={onFollow} className={className}>
        <span className="text-follow">{followingText}</span>
        <span className="text-unfollow">Unfollow</span>
      </button>
    </a>
  )
}
import './TwitterCard.css'

export default function TwitterCard() {
  return (
    <a href="#" className="tw-followCard">
      <img className="tw-followCard-avatar" src="https://unavatar.io/midudev" alt="Profile Picture" />
        <div className="tw-followCard-text">
          <strong className="tw-followCard-text-fullname">Miguel Ángel Durán</strong>
          <span className="tw-followCard-text-username">@midudev</span>
        </div>
        <button className="tw-followCard-followBtn">
          <span className="text-follow">Follow</span>
          <span className="text-unfollow">Unfollow</span>
        </button>
    </a>
  )
}
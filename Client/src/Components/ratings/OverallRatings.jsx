import React, { useState, useEffect } from 'react';
import StarRating from './StarRating.jsx';
import { overallStarRating, overallCharacteristics, overallRecommended } from './RatingsandReviews.jsx';
import CustomerReviews from './CustomerReviews.jsx';

const OverallRatings = ({ overallStarRating, overallCharacteristics, overallRecommended }) => {
  const [rating, setRating] = useState(0);
  const [ratingCnt, setRatingCnt] = useState(0);
  const [rec, setRec] = useState(0);
  const [char, setChar] = useState(0);
  const [starArray, setStarArray] = useState([]);

  useEffect(() => {
    let ratingCount = 0;
    let totalStars = 0
    Object.keys(overallStarRating).forEach((starValue) => {
      ratingCount += Number(overallStarRating[starValue]);
      totalStars += Number(starValue) * Number(overallStarRating[starValue]);
    });
    setRatingCnt(ratingCount);
    setRating(totalStars / ratingCount)
  }, [overallStarRating]);



  // useEffect(() => {
  //   let ratingCount = 0;
  //   let totalStars = 0
  //   Object.keys(overallStarRating).forEach((starValue) => {
  //     ratingCount += Number(overallStarRating[starValue]);
  //     totalStars += Number(starValue) * Number(overallStarRating[starValue]);
  //     console.log(totalStars / ratingCount);
  //     setChar(totalStars / ratingCount);
  //   });
  // }, [overallCharacteristics]);

  useEffect(() => {
    let recCount = Number(overallRecommended.true) + Number(overallRecommended.false)
    recCount = (Number(overallRecommended.true) / recCount) * 100
    setRec(Math.floor(recCount));
  }, [overallRecommended]);



  const fullStar = (
    <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/xlink" >
      <path d="M5.28347 1.54595C5.57692 0.951356 6.42479 0.951358 6.71825 1.54595L7.82997 3.79856L10.3159 4.15979C10.9721 4.25513 11.2341 5.06151 10.7592 5.52434L8.96043 7.27775L9.38507 9.75361C9.49716 10.4071 8.81122 10.9055 8.22431 10.597L6.00086 9.42801L3.7774 10.597C3.19049 10.9055 2.50455 10.4071 2.61664 9.75361L3.04128 7.27775L1.24246 5.52434C0.767651 5.06151 1.02966 4.25513 1.68584 4.15979L4.17174 3.79856L5.28347 1.54595Z" fill="#FFD700" stroke="#000000" />
    </svg>
  );

  const quarterStar = (
    <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.71825 1.54592C6.42479 0.951327 5.57692 0.951326 5.28347 1.54592L4.17174 3.79848L1.68584 4.1597C1.25906 4.22172 0.999018 4.58452 1 4.95795C1.00052 5.15868 1.07646 5.36249 1.24246 5.52431L3.04128 7.27772L2.61664 9.75353C2.60963 9.79439 2.60574 9.83465 2.60475 9.87414C2.60362 9.91952 2.60631 9.96389 2.6125 10.007C2.68708 10.5265 3.26935 10.864 3.7774 10.5969L6.00086 9.42798L8.22431 10.5969C8.81122 10.9055 9.49716 10.4071 9.38507 9.75358L8.96043 7.27772L10.7592 5.52431C11.2341 5.06148 10.9721 4.2551 10.3159 4.15976L7.82997 3.79853L6.71825 1.54592ZM5 8.82439V4.37675C5.00769 4.36323 5.01501 4.34944 5.02194 4.33539L6.00086 2.35189L6.97977 4.33539C7.0963 4.5715 7.32156 4.73516 7.58212 4.77302L9.77105 5.09109L8.18713 6.63503C7.99858 6.81882 7.91254 7.08362 7.95705 7.34313L8.33096 9.52321L6.37313 8.49392C6.14007 8.37139 5.86164 8.37139 5.62858 8.49392L5 8.82439Z" fill="#FFD700" stroke="#000000" />
    </svg>
  );
  const halfStar = (
    <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 9.42843L3.7774 10.5969C3.19049 10.9055 2.50455 10.4071 2.61664 9.75358L3.04128 7.27772L1.24246 5.52431C0.767651 5.06148 1.02966 4.2551 1.68584 4.15976L4.17174 3.79853L5.28347 1.54592C5.43005 1.24892 5.71495 1.10027 6 1.09998C6.28562 1.09968 6.57137 1.24833 6.71825 1.54592L7.82997 3.79853L10.3159 4.15976C10.9721 4.25511 11.2341 5.06148 10.7592 5.52431L8.96043 7.27772L9.38507 9.75358C9.49716 10.4071 8.81122 10.9055 8.22431 10.5969L6 9.42843ZM6 2.35362V8.40203C6.12816 8.40189 6.25634 8.43252 6.37313 8.49392L8.33096 9.52321L7.95705 7.34314C7.91254 7.08362 7.99858 6.81882 8.18713 6.63503L9.77105 5.09109L7.58212 4.77302C7.32156 4.73516 7.0963 4.5715 6.97977 4.33539L6.00086 2.35189L6 2.35362Z" fill="#FFD700" stroke="#000000" />
    </svg>
  );
  const threeQuarterStar = (
    <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.71825 1.54592L7.82997 3.79853L10.3159 4.15976C10.9721 4.2551 11.2341 5.06148 10.7592 5.52431L8.96043 7.27772L9.38507 9.75358C9.49716 10.4071 8.81122 10.9055 8.22431 10.5969L6.00086 9.42798L3.7774 10.5969C3.19049 10.9055 2.50455 10.4071 2.61664 9.75358L3.04128 7.27772L1.24246 5.52431C0.767651 5.06148 1.02966 4.2551 1.68584 4.15976L4.17174 3.79853L5.28347 1.54592C5.57692 0.951326 6.42479 0.951327 6.71825 1.54592ZM7 8.82348L8.33096 9.52321L7.95705 7.34313C7.91254 7.08362 7.99858 6.81882 8.18713 6.63503L9.77105 5.09109L7.58212 4.77302C7.3359 4.73724 7.12122 4.58914 7 4.37372V8.82348Z" fill="#FFD700" stroke="#000000" />
    </svg>
  );
  const emptyStar = (
    <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.28347 1.54595C5.57692 0.951356 6.42479 0.951358 6.71825 1.54595L7.82997 3.79856L10.3159 4.15979C10.9721 4.25513 11.2341 5.06151 10.7592 5.52434L8.96043 7.27775L9.38507 9.75361C9.49716 10.4071 8.81122 10.9055 8.22431 10.597L6.00086 9.42801L3.7774 10.597C3.19049 10.9055 2.50455 10.4071 2.61664 9.75361L3.04128 7.27775L1.24246 5.52434C0.767651 5.06151 1.02966 4.25513 1.68584 4.15979L4.17174 3.79856L5.28347 1.54595ZM6.00086 2.35192L5.02194 4.33542C4.90541 4.57153 4.68016 4.73519 4.41959 4.77305L2.23067 5.09112L3.81459 6.63506C4.00313 6.81885 4.08917 7.08365 4.04466 7.34316L3.67075 9.52324L5.62858 8.49395C5.86164 8.37142 6.14007 8.37142 6.37313 8.49395L8.33096 9.52324L7.95705 7.34317C7.91254 7.08365 7.99858 6.81885 8.18713 6.63506L9.77105 5.09112L7.58212 4.77305C7.32156 4.73519 7.0963 4.57153 6.97977 4.33542L6.00086 2.35192Z" fill="#FFD700" stroke="#000000" />
    </svg>
  );

  const createStarArray = (rating) => {
    const fullStars = Math.floor(rating);
    let decimal = (rating).toFixed(1);
    console.log(decimal)
    decimal = decimal.split('.')[1];
    let partiallyFilledStar;
    if (decimal < 2) {
      partiallyFilledStar = (emptyStar);
    }
    if (decimal > 1 && decimal < 4) {
      partiallyFilledStar = (quarterStar);
    }
    if (decimal > 3 && decimal < 7) {
      partiallyFilledStar = (halfStar);
    }
    if (decimal > 6 && decimal < 9) {
      partiallyFilledStar = (threeQuarterStar);
    }
    if (decimal > 8) {
      partiallyFilledStar = (fullStar);
    }
    const stars = [];
    for (let i = 1; i <= fullStars; i++) {
      stars.push(fullStar);
    }
    if (stars.length < 5) {
      stars.push(partiallyFilledStar);
    }
    if (stars.length < 5) {
      const starsToAdd = 5 - stars.length;
      for (let i = 0; i < starsToAdd; i++) {
        stars.push(emptyStar);
      }
    }
    return stars;
  };

  useEffect(() => {
    setStarArray(createStarArray(rating))
  }, [rating]);



  return (
    <div id='OverallRatingsMain' >
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 id="ratingInt">{rating === 0 ? rating : rating.toFixed(1)}</h1>
          <span> {starArray}</span>
        </div>
        <div>
          {` ${rec}% of reviews recommend this product`}
        </div>
        <div>
          <label>Size</label>
          <br /> <label>Comfort</label>
        </div>
      </div>
    </div>

  )
}

export default OverallRatings;
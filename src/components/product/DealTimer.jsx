import { useEffect, useState, useRef } from 'react';

export default function DealTimer({ product }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const timerRef = useRef(null);

  useEffect(() => {
    if (!product || !product.discountDTO.endDate) {
      return;
    }

    const endDate = new Date(product.discountDTO.endDate);
    endDate.setHours(23, 59, 59, 999);
    updateCountdown(endDate);
    startCountdown(endDate);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [product]);

  const updateCountdown = (endDate) => {
    const now = new Date().getTime();
    const diff = endDate - now;

    if (diff <= 0) {
      clearInterval(timerRef.current);
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60)
      });
    }
  };

  const startCountdown = (endDate) => {
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      updateCountdown(endDate);
    }, 1000);
  };

  return (
    <div className="time deal-timer product-deal-timer mx-md-0 mx-auto">
      <div className="product-title">
        <h4>Hurry up! Sales Ends In</h4>
      </div>
      <ul>
        <li>
          <div className="counter d-block">
            <div className="days d-block">{timeLeft.days}</div>
            <h6>Days</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="hours d-block">{timeLeft.hours}</div>
            <h6>Hours</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="minutes d-block">{timeLeft.minutes}</div>
            <h6>Min</h6>
          </div>
        </li>
        <li>
          <div className="counter d-block">
            <div className="seconds d-block">{timeLeft.seconds}</div>
            <h6>Sec</h6>
          </div>
        </li>
      </ul>
    </div>
  );
}

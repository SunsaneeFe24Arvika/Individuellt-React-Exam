// import { useState } from 'react';
// import { useSwipeable } from 'react-swipeable';

// function SwipePages() {
//   const [page, setPage] = useState(0); // 0 = första sidan

//   const handlers = useSwipeable({
//     onSwipedLeft: () => setPage((prev) => Math.min(prev + 1, 2)), // Nästa sida (max 2)
//     onSwipedRight: () => setPage((prev) => Math.max(prev - 1, 0)), // Föregående sida (min 0)
//   });

//   return (
//     <div {...handlers} style={{ width: "100%", height: "100vh", textAlign: "center", paddingTop: "100px", fontSize: "24px" }}>
//       {page === 0 && <div style={{ background: "lightcoral", height: "100%" }}>Sida 1</div>}
//       {page === 1 && <div style={{ background: "lightseagreen", height: "100%" }}>Sida 2</div>}
//       {page === 2 && <div style={{ background: "lightgoldenrodyellow", height: "100%" }}>Sida 3</div>}
//     </div>
//   );
// }

// export default SwipePages;

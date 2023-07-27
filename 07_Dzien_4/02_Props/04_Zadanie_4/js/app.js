import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const LikeBox = ({ startV: value }) => {

	return (
		<div>
			<p>{value}</p>
			<button>Lubie to!</button>
		</div>
	)
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<>
	<LikeBox startV={1100} />
</>);


// import React, { useState } from "react";
// import { createRoot } from "react-dom/client";

// const LikeBox = (props) => {
//     const [likes, setLikes] = useState(props.likes);

//     const handleLike = () => {
//         setLikes((prevLikes) => prevLikes + 1);
//     };

//     return (
//         <div>
//             <button onClick={handleLike}>Like</button>
//             <p>{likes} Likes</p>
//         </div>
//     );
// };

// const initialLikes = 10;
// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<LikeBox likes={initialLikes} />);
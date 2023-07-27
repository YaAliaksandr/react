
import React, { Component } from "react";
import { createRoot } from "react-dom/client";


const ChatHeader = () => {
	return (
		<header>
			<h1>Chat prywatny</h1>
		</header>
	)
}

const NewChatMessage = () => {
	return (
		<footer>
			<form>
				<input type="text" />
				<button>Wyślij</button>
			</form>
		</footer>
	)
}

const ChatMessage = (props) => {
	return (
		<li>{props.message}</li>
	)
}

const ChatMessages = () => {
	return (
		<div>
			<ul>
				<ChatMessage message="Wpis z chatu 1" />
				<ChatMessage message="Wpis z chatu 2" />
				<ChatMessage message="Wpis z chatu 3" />
			</ul>
		</div>
	)
}
function Chat(props) {
	return (
		<section className="chat">
			<ChatHeader />
			<ChatMessages />
			<NewChatMessage />
		</section>
	);
}

function App(props) {
	return <Chat />;
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);




// import React, { Component } from "react";
// import { createRoot } from "react-dom/client";

// function Chat(props) {
//   return (
//     <section className="chat">
//       <header>
//         <h1>Chat prywatny</h1>
//       </header>
//       <div>
//         <ul>
//           <li>Wpis z chatu 1</li>
//           <li>Wpis z chatu 2</li>
//           <li>Wpis z chatu 3</li>
//         </ul>
//       </div>
//       <footer>
//         <form>
//           <input type="text" />
//           <button>Wyślij</button>
//         </form>
//       </footer>
//     </section>
//   );
// }

// function App(props) {
//   return <Chat />;
// }

// const container = document.getElementById("app");
// const root = createRoot(container);
// root.render(<App />);

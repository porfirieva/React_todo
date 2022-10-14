import style from "./Dialogs.module.css";
import Dialog from "./Dialog";
import Message from "./Message";

const Dialogs = props => {
	// debugger;
	let messagesElement = props.state.messages.map(message => (
		<Message message={message.text} />
	));

	let dialogsElements = props.state.dialogs.map(dialog => (
		<Dialog name={dialog.name} id={dialog.id} />
	));
	return (
		<div className={style.dialogs}>
			<ul className={`${style.list} list-reset`}>{dialogsElements}</ul>
			<ul className={`${style.messages} list-reset`}>{messagesElement}</ul>
		</div>
	);
};

export default Dialogs;

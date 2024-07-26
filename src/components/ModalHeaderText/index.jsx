import PropTypes from "prop-types";

export default function ModalHeaderText({ title, body }) {
	return (
		<header className="mb-5 sm500:mb-8 text-center cursor-not-allowed">
			<h1 className="mt-0 text-xl font-bold sm500:text-3xl md:my-3 md:text-4xl">
				{title}
			</h1>
			<p className="text-sm dark:text-gray-600">{body}</p>
		</header>
	);
}

ModalHeaderText.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

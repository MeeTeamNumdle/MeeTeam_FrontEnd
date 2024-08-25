const useScrollToTop = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return scrollToTop;
};

export default useScrollToTop;

import React, { useCallback, useState, useEffect } from 'react';
import S from './ImageCarousel.styled';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ArrowLeft, ArrowRight } from '../../assets';
import type { Image } from '../../types';

const ImageCarousel = ({ images }: { images: Image[] }) => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
		},
		[Autoplay()]
	);

	const onPrevButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollPrev();
	}, [emblaApi]);

	const onNextButtonClick = useCallback(() => {
		if (!emblaApi) return;
		emblaApi.scrollNext();
	}, [emblaApi]);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		onSelect();
		emblaApi.on('select', onSelect);
	}, [emblaApi]);

	return (
		<S.ImageCarouselLayout className='embla' ref={emblaRef}>
			<S.ImageCarouselContainer className='embla__container'>
				{images.map(({ fileName, url }, index) => (
					<S.ImageWrapper className='embla__slide' key={index}>
						<S.Image src={url} alt={fileName} fetchpriority={index === 0 ? 'high' : 'low'} />
					</S.ImageWrapper>
				))}
			</S.ImageCarouselContainer>
			<S.ImageCarouselRow className='embla__controls'>
				<S.ButtonIcon
					className='embla__prev'
					onClick={onPrevButtonClick}
					src={ArrowLeft}
					alt='prevBtn'
				/>
				<small>
					<span>{selectedIndex + 1}</span> / {images.length}
				</small>
				<S.ButtonIcon
					className='embla__next'
					onClick={onNextButtonClick}
					src={ArrowRight}
					alt='nextBtn'
				/>
			</S.ImageCarouselRow>
		</S.ImageCarouselLayout>
	);
};
export default ImageCarousel;

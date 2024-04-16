import React from 'react';
import S from './Input.styled';
import {
	FieldValues,
	UseFormRegister,
	FormState,
	Path,
	RegisterOptions,
	UseFormWatch,
} from 'react-hook-form';

export interface Icon {
	default: string;
	focus?: string;
	arrow: string;
}

interface Input<T extends FieldValues> {
	width?: string;
	defaultValue?: string;
	register: UseFormRegister<T>;
	watch?: UseFormWatch<T>;
	formState?: FormState<T>;
	name: string;
	validation?: RegisterOptions;
	label?: string;
	icon?: Icon;
	maxLength?: number;
	placeholder?: string;
	inputRef?: React.MutableRefObject<HTMLInputElement | null>; // RefObject
	handleInputClick?: React.MouseEventHandler<HTMLInputElement>;
	handleKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Input = <T extends FieldValues>({
	width,
	register,
	watch,
	formState,
	name,
	validation,
	label,
	icon,
	inputRef,
	handleInputClick,
	handleKeyDown,
	...props
}: Input<T>) => {
	const inputError = formState?.errors[name];
	const inputErrorType = formState?.errors[name]?.type;
	const inputErrorMessage = formState?.errors[name]?.message as string;
	const inputValue = watch?.(name as Path<T>);

	const { ref, ...rest } = register(name as Path<T>, validation);

	return (
		<S.InputLayout $width={width}>
			{label && (
				<S.InputLabel $required={validation?.required ? true : false}>{label}</S.InputLabel>
			)}
			<S.InputContainer>
				<S.Input
					{...rest}
					{...props}
					{...icon}
					invalid={inputErrorType !== 'countingLetters' && inputError}
					ref={(e: HTMLInputElement) => {
						ref(e);
						if (inputRef) inputRef.current = e;
					}}
					onClick={handleInputClick}
					onKeyDown={handleKeyDown}
				/>
				<small>{inputErrorMessage}</small>
				{props?.maxLength && (
					<span>
						{inputValue?.length ?? 0}/{props.maxLength}
					</span>
				)}
			</S.InputContainer>
		</S.InputLayout>
	);
};

export default Input;

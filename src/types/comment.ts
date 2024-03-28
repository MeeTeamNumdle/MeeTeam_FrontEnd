import React from 'react';

export interface Comment {
	id: number;
	nickname: string;
	profileImg: string;
	content: string;
	createAt: string | undefined;
	replies?: Comment[];
	isWriter: boolean;
	deleteComment?: (id: number) => void;
}

export interface CommentInputFunctions {
	contents: string;
	addComment?: () => void;
	onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	onChangeHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onClickInput?: () => void;
}

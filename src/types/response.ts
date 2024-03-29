export interface UserReponse {
	nickname?: string;
	imageUrl?: string;
	accessToken?: string;
	refreshToken?: string;
	platformId?: string;
	isEnable?: boolean;
}

export interface University {
	universityId: string;
	universityName: string;
	universityDomain: string;
}

export interface Department {
	departmentId: string;
	departmentName: string;
}
